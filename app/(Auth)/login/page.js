import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <main className="min-h-screen">
      <section className="w-full flex flex-col md:flex-row">
        {/* //! left section */}
        <div className="md:w-1/2 w-full hidden md:flex bg-secondary min-h-screen p-6 flex-col justify-between">
          <Link href="/" className="text-4xl font-semibold">
            GOGO Rides
          </Link>
          <p className="text-lg">
            Rev up your sales with our one-stop shop for all vehicles! Sell
            anything on wheels effortlessly and profitably today!
          </p>
        </div>
        {/* //! Right section */}
        <div className="md:w-1/2 w-full min-h-screen flex justify-center items-center flex-col">
          <LoginForm />
          <p className="inline-flex gap-1 text-base mx-auto mt-5">
            Don&apos;t have an account?
            <Link href="/signup" className="hover:underline flex items-center">
              signup <ArrowTopRightIcon />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
