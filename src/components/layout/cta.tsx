"use client";

import Header from "@/components/common/header";
import { Button } from "../ui/button";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function CTA() {
    return (
        <div className="p-2">
            <div className="cta bg-[url('/background/bg-cta.png')] bg-no-repeat bg-cover bg-center rounded-[12px] py-16 px-6 md:p-16 flex flex-col justify-center items-center">
                <SlideFadeIn
                    items={[
                        { selector: ".cta-header", from: 40, direction: "y" },
                        { selector: ".cta-button", from: 40, direction: "y" }
                    ]}
                    staggerDelay={0.1}
                >
                    <div className="container max-w-[67rem] md:py-10 flex flex-col gap-8 justify-center items-center">
                        <div className="cta-header">
                            <Header
                                title="Start Growing with Custo Now"
                                description="Take control of your sales pipeline, automate tasks, and build stronger customer relationships with ease."
                                className="max-w-[576px] text-center"
                            />
                        </div>
                        <div className="cta-button w-full md:w-auto">
                            <Button variant="primary" size="base" className="cursor-pointer w-full md:w-auto">
                                Start for Free
                            </Button>
                        </div>
                    </div>
                </SlideFadeIn>
            </div>
        </div>
    );
}
