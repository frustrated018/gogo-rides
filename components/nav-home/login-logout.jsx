"use client";
import { auth } from "@/firebase/config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <>
      {user ? (
        <Button
          onClick={async () => {
            const success = await signOut();
            if (success) {
              alert("You are sign out");
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
