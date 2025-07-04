"use client";

import Image from "next/image";
import FadeInSection from "../animation/fadeIn";
import Link from "next/link";
export default function Footer() {
    return (
        <div className="px-2 pb-2">
            <div className="footer relative bg-[url('/background/bg-footer.svg')] bg-cover rounded-[12px] overflow-hidden bg-center px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
                <Image
                    src="/background/logo-footer.svg"
                    alt="footer"
                    width={561}
                    height={561}
                    className="absolute object-cover overflow-visible min-h-[561px] md:min-h-0 -right-90 -bottom-50 md:left-0 md:top-5 pointer-events-none select-none"
                />
                <div className="container max-w-[67rem] flex flex-col">
                    <div className="top py-10 lg:py-16 flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
                        <FadeInSection delay={0.5} className="top-left flex flex-col gap-6">
                            <div className="flex flex-col gap-3 max-w-[246px] lg:max-w-[16rem]">
                                <Image src="/logo/logo-footer.svg" alt="footer" width={92} height={24} />
                                <p className="text-[12px] md:text-medium text-white opacity-[72%]">Simplify customer relationships and scale your business with Custo.</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/icon/linkedin.svg" alt="sosmed" width={24} height={24} className="hover:opacity-80"/> 
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/icon/fb.svg" alt="sosmed" width={24} height={24} className="hover:opacity-80"/>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/icon/ig.svg" alt="sosmed" width={24} height={24} className="hover:opacity-80"/>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <Image src="/icon/yt.svg" alt="sosmed" width={24} height={24} className="hover:opacity-80"/>
                                </a>
                            </div>
                        </FadeInSection>
                        <FadeInSection delay={0.5} className="top-right grid grid-cols-2 gap-10 md:gap-0 md:grid-cols-3 justify-between md:min-w-[20.9rem] lg:min-w-0 lg:gap-[7.5rem]">
                            <div className="flex flex-col gap-4">
                                <p className="text-[14px] font-medium md:text-large text-white">Quick Links</p>
                                <ul className="text-[12px] md:text-medium text-white opacity-[72%] space-y-3">
                                    <li><Link href="/home#features-1" className="hover:opacity-80">Benefits</Link></li>
                                    <li><Link href="/home#features-2" className="hover:opacity-80">Features</Link></li>
                                    <li><Link href="/home#testimonials" className="hover:opacity-80">Testimonials</Link></li>
                                    <li><Link href="/home#faqs" className="hover:opacity-80">FAQs</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-[14px] font-medium md:text-large text-white">Main Pages</p>
                                <ul className="text-[12px] md:text-medium text-white opacity-[72%] space-y-3">
                                    <li><a href="/home" className="hover:opacity-80">Home</a></li>
                                    <li><a href="/about" className="hover:opacity-80">About</a></li>
                                    <li><a href="/pricing" className="hover:opacity-80">Pricing</a></li>
                                    <li><a href="/contact" className="hover:opacity-80">Contact</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-[14px] font-medium md:text-large text-white">Other Pages</p>
                                <ul className="text-[12px] md:text-medium text-white opacity-[72%] space-y-3">
                                    <li>
                                        <Link href="/blog" className="hover:opacity-80">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className="hover:opacity-80">
                                            Blog Details
                                        </Link>
                                    </li>
                                    <li><a href="/404" className="hover:opacity-80">Error 404</a></li>
                                </ul>
                            </div>
                        </FadeInSection>
                    </div>
                    <FadeInSection delay={0.5} className="bottom flex flex-row py-6 justify-between border-t border-white/12">
                        <p className="text-[12px] md:text-medium font-normal text-white">2025 © Custo</p>
                        <div className="flex flex-row gap-2">
                            <a href="#" className="text-[12px] md:text-medium font-normal text-white hover:opacity-80">Get this template</a>
                            <Image src="/icon/arrow.svg" alt="arrow" width={12} height={12} className="cursor-pointer hover:opacity-80"/>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}