"use client";
import { auth } from "@/firebase/config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Button } from "../../ui/button";
import Link from "next/link";
import { toast } from "sonner";

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <>
      {user ? (
        <Button
          onClick={async () => {
            try {
              const logOut = await signOut();
              if (logOut) {
                toast.success("Sign out successful!");
              }
            } catch (error) {
              toast.error("Failed to sign out...");
            }
          }}
        >
          Sign Out
        </Button>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default LoginLogout;