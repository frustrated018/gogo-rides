"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/firebase/config";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function AuthGaurd({ children }) {
  const [user] = useAuthState(auth);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {user ? (
        <>{children}</>
      ) : (
        <section className="my-10 grid place-items-center">
          <Card className="bg-destructive">
            <CardHeader>
              <CardTitle className>This is a protected route!</CardTitle>
            </CardHeader>
            <CardContent>
              <h2>You are trying to access {pathname}.</h2>
              <h3>Please login to access this page.</h3>
            </CardContent>
            <CardFooter>
              <Button onClick={() => router.push(`/login?from=${pathname}`)}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </section>
      )}
    </>
  );
}
