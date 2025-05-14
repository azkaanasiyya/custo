import Header from "@/components/common/header";
import Image from "next/image";
import testimonials from "../data/testimonials";

export default function Testimonial() {
    return (
        <div className="testimonial-section py-[6.5rem] px-[1rem] flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-[4rem]">
                <Header
                    title="Real Stories from Real Users"
                    description="Hear how Custo has helped businesses close more deals, collaborate better, and stay organized."
                />
                <div className="w-full overflow-hidden">
                    <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-pl-6 scroll-smooth px-4">
                        {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-row gap-4 flex-shrink-0 w-[52rem] snap-start"
                        >
                            <Image
                            src={item.image}
                            alt={item.name}
                            width={294}
                            height={305}
                            />
                            <div className="flex flex-col gap-8 p-8 max-w-[36.25rem] rounded-[20px] border border-grayscale-200 shadow">
                            <Image
                                src={item.stars}
                                alt="stars"
                                width={116}
                                height={20}
                            />
                            <p className="text-large text-grayscale-600">
                                “{item.quote}”
                            </p>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-xlarge text-grayscale-950 font-medium">
                                {item.name}
                                </p>
                                <p className="text-medium text-grayscale-600">
                                {item.role}
                                </p>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
