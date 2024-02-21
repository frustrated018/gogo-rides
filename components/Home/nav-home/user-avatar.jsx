"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginLogout from "./login-logout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UserAvatar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={user ? user?.photoURL : "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{user?.displayName}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            {user ? user.displayName : "No User"}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <div className="space-y-2">
            <LoginLogout />
            <Button
              className="w-full"
              onClick={() => toast.info("Coming Soon")}
            >
              Dashboard
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserAvatar;
