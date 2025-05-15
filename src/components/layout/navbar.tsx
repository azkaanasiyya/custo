import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-6 absolute top-0 w-full z-100">
      <div className="w-full max-w-[1072px] mx-auto ">
        <div className="flex items-center justify-between gap-10">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src="/logo/Logo.svg" alt="Logo" width={92} height={24} />
            </Link>
          </div>
          <ul className="flex flex-1 justify-start gap-2 cursor-pointer">
            <li className="px-3 py-2">
              <Link href="/about">
                <p className="text-grayscale-950">About</p>
              </Link>
            </li>
            <li className="px-3 py-2">
              <a href="/pricing" className="text-grayscale-950 ">
                Pricing
              </a>
            </li>
            <li className="px-3 py-2">
              <Link href="/blog">
                <p className="text-grayscale-950">Blog</p>
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link href="/contact">
              <Button variant="Secondary" size="small" className="cursor-pointer"> 
                Contact Sales
              </Button>
            </Link>
            
            <Button variant="primary" size="small" className="cursor-pointer">
              Start for Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
