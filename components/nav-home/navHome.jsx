import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import LoginLogout from "./login-logout";
import UserAvatar from "./user-avatar";

const NavHome = () => {
  return (
    <header className="bg-background border-b">
      <section className="p-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          GOGO Rides
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/add">Add Product</Link>
          <Link href="/cart">My Cart</Link>
        </div>
        <div className="gap-5 flex items-center">
          <LoginLogout />

          <ThemeToggle />

          <UserAvatar />
        </div>
      </section>
    </header>
  );
};

export default NavHome;
