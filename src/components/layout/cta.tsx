"use client";

import Header from "@/components/common/header";
import { Button } from "../ui/button";
import FadeInSection from "../animation/fadeIn";
import Image from "next/image";

export default function CTA() {
    return (
        <div className="p-2">
            <div className="cta relative bg-[url('/background/bg-cta.png')] overflow-hidden bg-no-repeat bg-center rounded-[12px] py-16 px-6 md:p-16 flex flex-col justify-center items-center"
                style={{ backgroundSize: '100% 100%' }}
            >
                <Image
                    src="/background/logo-cta.png"
                    alt="cta"
                    width={1184}
                    height={402}
                    className="absolute object-contain overflow-visible w-[1184px] lg:max-w-full min-h-[402px] lg:max-h-full bottom-0 pointer-events-none select-none"
                    //className="absolute inset-0 w-full h-full object-contain"
                />
                {/* <div
                    className="relative bg-[url('/background/bg-cta.png')] overflow-hidden bg-no-repeat bg-center rounded-[12px] py-16 px-6 md:p-16 flex flex-col justify-center items-center"
                    style={{ backgroundSize: '100% 100%' }}
                >
                    <Image
                        src="/background/logo-cta.png"
                        alt="cta"
                        width={1184}
                        height={402}
                        className="absolute w-[1184px] h-[402px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none select-none"
                    /> */}
                    <FadeInSection delay={0.5} className="container max-w-[67rem] md:py-10 flex flex-col gap-8 justify-center items-center">
                        <div className="cta-header">
                            <Header
                                title={
                                    <>
                                      Start Growing <br className="block md:hidden"/> with Custo Now  
                                    </>
                                }
                                description="Take control of your sales pipeline, automate tasks, and build stronger customer relationships with ease."
                                className="max-w-[590px] text-center"
                            />
                        </div>
                        <div className="cta-button w-full md:w-auto">
                            <Button variant="primary" size="base" className="cursor-pointer w-full md:w-auto">
                                Start for Free
                            </Button>
                        </div>
                    </FadeInSection>
            </div>
        </div>
    );
}
