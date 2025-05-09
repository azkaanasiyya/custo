import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-6 absolute top-0 w-full">
      <div className="w-full max-w-[1072px] mx-auto ">
        <div className="flex items-center justify-between gap-10">
          <div>
            <Link href="/">
              <Image src="/logo/Logo.svg" alt="Logo" width={92} height={24} />
            </Link>
          </div>
          <ul className="flex flex-1 justify-start gap-2">
            <li className="px-3 py-2">
              <Link href="/about">
                <p className="text-grayscale-950">About</p>
              </Link>
            </li>
            <li className="px-3 py-2">
              <a href="/about" className="text-grayscale-950 ">
                Pricing
              </a>
            </li>
            <li className="px-3 py-2">
              <a href="/contact" className="text-grayscale-950">
                Blog
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <Button variant="Secondary" size="small">
              Contact Sales
            </Button>
            <Button variant="primary" size="small">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
