import Image from "next/image";

export default function AboutQuote() {
    return (
        <div className="quote-section bg-[url('/background/bg-about.svg')] bg-no-repeat bg-center max-h-[38rem] py-[6.5rem] px-4 flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-row justify-between items-center">
                <Image src="quote.svg" alt="quote" width={435} height={400} />
                <div className="content flex flex-col gap-[2rem] max-w-[32.875rem]">
                    <div className="header flex flex-col gap-[1rem]">
                        <div className="typography font-semibold text-grayscale-950">
                            <h3>Together, We Grow Better</h3>
                        </div>
                        <p className="text-xlarge text-grayscale-600">“At Custo, we believe growth is not a solo journey. Every step we take is in collaboration with those we serve and that’s what makes the journey meaningful. We&apos;re here to grow with you, every step of the way.”</p>
                    </div>
                    <div className="profile flex flex-col gap-[0.03125rem]">
                        <p className="font-medium text-xlarge text-grayscale-950">Raul Christiansen</p>
                        <p className="text-medium text-grayscale-600">Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}