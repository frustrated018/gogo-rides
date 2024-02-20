import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const FooterHome = () => {
  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link href="/" className="text-4xl font-semibold">
            GOGO Rides
          </Link>
        </div>

        <p className="mx-auto mt-4 max-w-md text-center leading-relaxed">
          GOGO Rides, your destination for buying and selling vehicles! Whether
          you&apos;re looking for a new ride or hoping to sell your current one,
          we&apos;ve got you covered.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground hover:underline"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground hover:underline"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground hover:underline"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground hover:underline"
            >
              Blog
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground"
            >
              <FaXTwitter size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground"
            >
              <FaYoutube size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground"
            >
              <FaInstagram size={25} />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-accent-foreground"
            >
              <FaFacebook size={25} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-sm flex justify-between border-t border-muted-foreground flex-col md:flex-row">
        <p className="p-4 text-muted-foreground text-center md:text-start">
          © 2022-2024. GOGO Rides INC. All rights reserved.
        </p>
        <p className="p-4 text-muted-foreground flex items-center gap-1 mx-auto md:mx-0">
          Crafted by{" "}
          <a
            className="hover:text-accent-foreground flex items-center"
            href="https://github.com/frustrated018"
          >
            frustrated018 <ArrowTopRightIcon />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default FooterHome;
