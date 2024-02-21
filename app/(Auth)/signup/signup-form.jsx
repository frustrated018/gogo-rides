"use client";

import { createUser } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/config";
import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowTopRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";

//! Submit button based on state
function SubmitButton() {
  const router = useRouter();
  const { pending } = useFormStatus();
  const searchParams = useSearchParams();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 flex-col sm:flex-row">
      {pending ? (
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">Signup with email</Button>
      )}
      <p>Or</p>
      <Button
        type="button"
        onClick={async () => {
          try {
            await signInWithGoogle();
            // TODO: make a db call to check if user already exisits

            toast.success("Welcome to GOGO Rides!");
            router.push(`${searchParams.get("from")}`);
          } catch (error) {
            // TODO: Throw error from db
            toast.error("Couldn't sign up using Google!");
          }
        }}
        className="flex justify-center items-center gap-2"
      >
        <FaGoogle /> Google
      </Button>
    </div>
  );
}

const SignupForm = () => {
  const formRef = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
      <form
        ref={formRef}
        //! Server action to create User
        action={async (formData) => {
          const password = formData.get("password");
          const email = formData.get("email");
          const name = formData.get("name");
          const photoUrl = formData.get("photoUrl");
          try {
            const addUser = await createUser(formData);

            const createFirebasaeUser = await createUserWithEmailAndPassword(
              email,
              password
            );

            const updateFirebaseUser = await updateProfile({
              displayName: name,
              photoURL: photoUrl || "",
            });

            // Waiting for promises to resolve
            await Promise.all([
              addUser,
              createFirebasaeUser,
              updateFirebaseUser,
            ]);

            // resetting form & Showing toast
            formRef.current.reset();
            router.push(`${searchParams.get("from")}`);
            toast.success("Hi! Welcome to GOGO Rides.", {
              duration: 4000,
            });
          } catch (error) {
            console.log(error);
            toast.error(`${error}`);
          }
        }}
        className="w-[90%] max-w-md mx-auto flex-grow space-y-3"
      >
        <div>
          <Label htmlFor="name">Name:</Label>
          <Input
            className="w-full"
            name="name"
            placeholder="John Doe"
            type="text"
            autoComplete="name"
            autoCorrect="off"
            required={true}
          />
        </div>
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            className="w-full"
            name="email"
            placeholder="name@example.com"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            required={true}
          />
        </div>

        <div>
          <Label htmlFor="email">Password:</Label>
          <Input
            name="password"
            placeholder="****************"
            type="password"
            required={true}
          />
        </div>

        <div>
          <Label htmlFor="photoUrl">Photo URL:</Label>
          <Input
            className="w-full"
            name="photoUrl"
            placeholder="https://source.unsplash.com/url-from-da-site"
            type="url"
            autoComplete="url"
          />
        </div>

        <SubmitButton />
      </form>

      <p className="inline-flex gap-1 text-base mx-auto mt-5">
        Already have an account?{" "}
        <Link
          href={`/login?from=${searchParams.get("from")}`}
          className="hover:underline flex items-center"
        >
          Login <ArrowTopRightIcon />
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
