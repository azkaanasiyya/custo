import Image from "next/image";
export default function Footer() {
    return (
        <div className="footer bg-[url('/background/bg-footer.svg')] bg-no-repeat bg-center px-16 flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col">
                <div className="top py-16 flex flex-row justify-between">
                    <div className="top-left flex flex-col gap-6">
                        <div className="flex flex-col gap-3 max-w-[16rem]">
                            <Image src="/logo/logo-footer.svg" alt="footer" width={92} height={24} />
                            <p className="text-medium text-white opacity-[72%]">Simplify customer relationships and scale your business with Custo.</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/icon/linkedin.svg" alt="sosmed" width={24} height={24} />
                            <Image src="/icon/fb.svg" alt="sosmed" width={24} height={24} />
                            <Image src="/icon/ig.svg" alt="sosmed" width={24} height={24} />
                            <Image src="/icon/yt.svg" alt="sosmed" width={24} height={24} />
                        </div>
                    </div>
                    <div className="top-right grid grid-cols-3 gap-[7.5rem]">
                        <div className="flex flex-col gap-4">
                            <p className="text-large text-white">Quick Links</p>
                            <ul className="text-medium text-white opacity-[72%] space-y-3">
                                <li>Benefits</li>
                                <li>Features</li>
                                <li>Testimonials</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-large text-white">Main Pages</p>
                            <ul className="text-medium text-white opacity-[72%] space-y-3">
                                <li>Home</li>
                                <li>About</li>
                                <li>Pricing</li>
                                <li>Content</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-large text-white">Other Pages</p>
                            <ul className="text-medium text-white opacity-[72%] space-y-3">
                                <li>Blog</li>
                                <li>Blog Details</li>
                                <li>Error 404</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom flex flex-row py-6 justify-between border-t" style={{ borderColor: "rgba(255, 255, 255, 0.12)"}}>
                    <p className="text-medium font-normal text-white">2025 © Custo</p>
                    <div className="flex flex-row gap-2">
                        <a href="#" className="text-medium font-normal text-white">Get this template</a>
                        <Image src="/icon/arrow.svg" alt="arrow" width={12} height={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}