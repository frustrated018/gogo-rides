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
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

//! Submit button based on state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? "Processing.." : "Signup with email"}
    </Button>
  );
}

const SignupForm = () => {
  const formRef = useRef();
  const router = useRouter();

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
            router.push("/");
            toast.success("Hi! Welcome to our site.", {
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
          />
        </div>

        <div>
          <Label htmlFor="email">Password:</Label>
          <Input
            name="password"
            placeholder="****************"
            type="password"
          />
        </div>

        <div>
          <Label htmlFor="photoUrl">Photo URL:</Label>
          <Input
            className="w-full"
            name="photoUrl"
            placeholder="https://source.unsplash.com/url-from-da-site"
            type="text"
            autoComplete="name"
            autoCorrect="off"
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
};

export default SignupForm;
