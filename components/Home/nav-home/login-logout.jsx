"use client";
import { auth } from "@/firebase/config";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Button } from "../../ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";

const LoginLogout = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const pathname = usePathname();

  return (
    <>
      {user ? (
        <Button
          className="w-full items-center gap-1"
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
          Sign Out <ExitIcon />
        </Button>
      ) : (
        <Link href={`/login?from=${pathname}`}>
          <Button className="w-full items-center gap-1">
            Login <EnterIcon />
          </Button>
        </Link>
      )}
    </>
  );
};

export default LoginLogout;
