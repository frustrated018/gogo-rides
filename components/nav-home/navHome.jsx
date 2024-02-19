import Link from "next/link";

const NavHome = () => {
  return (
    <header className="bg-background border-b">
      <section className="p-6 flex justify-between">
        <Link href="/" className="text-xl font-semibold">GOGO Rides</Link>
        <div className="space-x-5">
        <Link href="/">Home</Link>
        <Link href="/">Add Product</Link>
        <Link href="/">My Cart</Link>
        </div>
        <div className="space-x-2">
          {/* Conditional */}
        <Link href="/">Login</Link>
        <Link href="/">Theme Toggle</Link>
        <Link href="/">Avatar</Link>
        </div>
      </section>
    </header>
  );
};

export default NavHome;
