'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-6 lg:px-0 absolute top-0 w-full z-[100] md:bg-transparent">
      <div className="w-full max-w-[1072px] mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="cursor-pointer">
            <Image src="/logo/Logo.svg" alt="Logo" width={92} height={24} />
          </Link>

          <ul className="hidden lg:flex flex-1 justify-start gap-2 cursor-pointer">
            <li className="px-3 py-2"><Link href="/about"><p className="text-grayscale-950">About</p></Link></li>
            <li className="px-3 py-2"><Link href="/pricing"><p className="text-grayscale-950">Pricing</p></Link></li>
            <li className="px-3 py-2"><Link href="/blog"><p className="text-grayscale-950">Blog</p></Link></li>
          </ul>

          <div className="hidden lg:flex gap-3">
            <Link href="/contact">
              <Button variant="Secondary" size="small" className="cursor-pointer">Contact Sales</Button>
            </Link>
            <Button variant="primary" size="small" className="cursor-pointer">Start for Free</Button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-5 px-6 border-t justify-center items-center bg-white lg:hidden">
            <ul className="flex flex-col py-5 gap-5">
              <li><Link href="/about"><p className="text-grayscale-950">About</p></Link></li>
              <li><Link href="/pricing"><p className="text-grayscale-950">Pricing</p></Link></li>
              <li><Link href="/blog"><p className="text-grayscale-950">Blog</p></Link></li>
            </ul>
            <div className="flex flex-col gap-3">
              <Link href="/contact">
                <Button variant="Secondary" size="small" className="w-full">Contact Sales</Button>
              </Link>
              <Button variant="primary" size="small" className="w-full">Start for Free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
