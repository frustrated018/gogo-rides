"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const UserAvatar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Avatar>
        <AvatarImage
          src={user ? user.photoURL : "https://github.com/shadcn.png"}
        />
        <AvatarFallback>{user?.displayName}</AvatarFallback>
      </Avatar>
    </>
  );
};

export default UserAvatar;
