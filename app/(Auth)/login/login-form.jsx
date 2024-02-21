"use client";

import { LoginUserExists } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowTopRightIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import Link from "next/link";

//! Submit button based on state
function SubmitButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { pending } = useFormStatus();
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="flex justify-center items-center gap-2 md:gap-5 flex-col sm:flex-row">
      {pending ? (
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit">Log in with email</Button>
      )}
      <p>Or</p>
      <Button
        type="button"
        onClick={async () => {
          try {
            await signInWithGoogle();
            // TODO: make a db call to check if user already exisits

            toast.success("Welcome to Back!");
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

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-5">Login</h2>
      <form
        action={async (formData) => {
          const password = formData.get("password");
          const email = formData.get("email");
          try {
            const usersExistance = await LoginUserExists(formData);

            const signIn = await signInWithEmailAndPassword(email, password);

            await Promise.all([usersExistance, signIn]);

            // Display success message to the user
            toast.success("Welcome Back!!");
            router.push(`${searchParams.get("from")}`);
          } catch (error) {
            console.log(error);
            toast.error(`${error.message}`);
          }
        }}
        className="w-[90%] max-w-md mx-auto flex-grow space-y-3"
      >
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
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Password:</Label>
          <Input
            name="password"
            placeholder="****************"
            type="password"
            required
          />
        </div>
        <SubmitButton />
      </form>

      <p className="inline-flex gap-1 text-base mx-auto mt-5">
            Don&apos;t have an account?
            <Link href={`/signup?from=${searchParams.get("from")}`} className="hover:underline flex items-center">
              signup <ArrowTopRightIcon />
            </Link>
          </p>
    </div>
  );
};

export default LoginForm;
