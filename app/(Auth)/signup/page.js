import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const SignupPage = () => {
  return (
    <main className="min-h-screen">
      <section className="w-full flex">
        {/* //! left section */}
        <div className="w-1/2 bg-secondary h-screen p-6 flex flex-col justify-between">
          <Link href="/" className="text-4xl font-semibold">
            GOGO Rides
          </Link>
          <p className="text-lg">
            Rev up your sales with our one-stop shop for all vehicles! Sell
            anything on wheels effortlessly and profitably today!
          </p>
        </div>
        {/* //! Right section */}
        <div className="w-1/2 h-screen grid place-items-center">
          <h2 className="text-4xl">Signup Page</h2>
          <h2 className="text-4xl"> this is where the form will be</h2>

          <p className="inline-flex gap-1 text-base">
           Already have an account?{" "}
            <Link href="/login" className="hover:underline flex items-center">
              Login <ArrowTopRightIcon />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
