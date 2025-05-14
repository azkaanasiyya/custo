import Image from "next/image";
import { Button } from "../ui/button";

export default function PricingHero() {
    return (
        <div className="hero-section bg-[url('/background/bg-pricing.png')] bg-cover pt-40 pb-[6.5rem] px-16 flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-10">
                <div className="header flex flex-col gap-4 justify-center items-center">
                    <div className="typography text-grayscale-950 text-center max-w-[550px]">
                        <h1>Designed for Sustainable Growth</h1>
                    </div>
                    <p className="text-xlarge max-w-[41rem] text-center text-gray-600">Invest in a solution that scales with precision and purpose.</p>
                </div>
                <div className="flex justify-center mb-8">
                <div className="relative flex items-center bg-[#DDF5E6] rounded-full p-1 w-[280px] h-[48px]">
                    <div className="absolute top-1 left-1 h-[40px] w-[132px] rounded-full bg-white shadow transition-all duration-300"></div>
                    <button
                    className="z-10 w-[132px] h-[40px] text-medium font-medium rounded-full transition-colors text-grayscale-900"
                    >
                    Monthly
                    </button>
                    <button
                    className="z-10 w-[132px] h-[40px] text-medium font-medium rounded-full transition-colors text-gray-500"
                    >
                    Annually
                    </button>
                </div>
                </div>

                <div className="content grid grid-cols-3 gap-5 pt-6">
                    <div className="card flex flex-col gap-8 rounded-[1.25rem] border p-7 bg-white border-grayscale-200">
                        <div className="flex flex-col gap-3">
                            <p className="text-xlarge font-medium text-grayscale-950">Starter</p>
                            <div className="flex flex-row items-end gap-3">
                                <div className="typography">
                                    <h2>$29</h2>
                                </div>
                                <p className="text-xlarge text-grayscale-600">/month</p>
                            </div>
                            <p className="text-medium text-grayscale-600">Ideal for solo founders and small teams just getting started with CRM.</p>
                        </div>
                        <Button variant="Secondary" size="small">Get Started</Button>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Up to 3 Users</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">2 GB Storage</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Core CRM Features</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">1 Sales Pipeline</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Basic Email Integration</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col justify-center items-center gap-3 pt-3 px-0.5 pb-0.5 bg-grayscale-950 rounded-[1.25rem]">
                        <p className="text-medium text-white">Most Popular</p>
                        <div className="flex flex-col gap-8 rounded-[1.25rem] border p-7 bg-white border-grayscale-200">
                        <div className="flex flex-col gap-3">
                            <p className="text-xlarge font-medium text-grayscale-950">Growth</p>
                            <div className="flex flex-row items-end gap-3">
                                <div className="typography">
                                    <h2>$79</h2>
                                </div>
                                <p className="text-xlarge text-grayscale-600">/month</p>
                            </div>
                            <p className="text-medium text-grayscale-600">Best for scaling teams that need advanced collaboration tools.</p>
                        </div>
                        <Button variant="primary" size="small">Get Started</Button>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Up to 10 Users</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Workflow Automation</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Multiple Pipelines</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Team Collaboration Tools</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Activity & Deal Reports</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card flex flex-col gap-8 rounded-[1.25rem] border p-7 bg-white border-grayscale-200">
                        <div className="flex flex-col gap-3">
                            <p className="text-xlarge font-medium text-grayscale-950">Enterprise</p>
                            <div className="flex flex-row items-end gap-3">
                                <div className="typography">
                                    <h2>$199</h2>
                                </div>
                                <p className="text-xlarge text-grayscale-600">/month</p>
                            </div>
                            <p className="text-medium text-grayscale-600">Tailored for large organizations with complex workflows.</p>
                        </div>
                        <Button variant="Secondary" size="small">Get Started</Button>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Unlimited Users</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Role-Based Permissions</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Advanced Workflow Automation</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Custom Dashboards</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Image src="/icon/check.svg" alt="check" width={20} height={20} />
                                <p className="text-medium text-grayscale-950">Priority Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}