"use client";

import { createUser } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";

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
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-5">Sign Up</h2>
      <form
      //! Server action to create User
        action={async (formData) => {
          await createUser(formData);
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
        {/* <Button type="submit">Sign Up with Email</Button> */}
      </form>
    </div>
  );
};

export default SignupForm;
