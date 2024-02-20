"use client";
import { auth } from "@/firebase/config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  return (
    <div className="inline-flex gap-1">
      <p>Name: </p>
      <h2>{user ? user.displayName : "No user"}</h2>

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
    </div>
  );
};

export default LoginLogout;
