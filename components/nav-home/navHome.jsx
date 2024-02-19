import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
          {/* Conditional */}
          <Link href="/">Login</Link>
          <ThemeToggle />
          <Link href="/">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default NavHome;
