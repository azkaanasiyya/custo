import Image from "next/image";

export default function About() {
    return (
        <div className="about-section px-[4rem] py-[6.5rem] flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col gap-[4rem]">
                <div className="header flex flex-row justify-between items-end">
                    <div className="typography w-[27.1875rem]">
                        <h3>Guided by Purpose and Principles</h3>
                    </div>
                    <p className="text-xlarge text-grayscale-600 max-w-[32.875rem]">
                        Our principles shape every decision we make. They reflect who we are and how we aim to make a meaningful difference.
                    </p>
                </div>
                <div className="list grid grid-cols-3 rounded-[1.25rem] border shadow-sm border-grayscale-200">
                    <div className="flex flex-col p-[2.5rem] gap-[1.5rem] border-r">
                        <Image src="/user.svg" alt="list" width={48} height={48} />
                        <div className="flex flex-col gap-[0.75rem]">
                            <div className="typography text-grayscale-950">
                                <h4>People First</h4>
                            </div>
                            <p className="text-large text-grayscale-600">
                                Our users, team, and community come before everything else. When people thrive, so does our work.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col p-[2.5rem] gap-[1.5rem] border-r">
                        <Image src="/heart.svg" alt="list" width={48} height={48} />
                        <div className="flex flex-col gap-[0.75rem]">
                            <div className="typography text-grayscale-950">
                                <h4>Lead with Empathy</h4>
                            </div>
                            <p className="text-large text-grayscale-600">
                                Empathy helps us understand before we act. It drives how we solve real problems.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col p-[2.5rem] gap-[1.5rem]">
                        <Image src="/shield.svg" alt="list" width={48} height={48} />
                        <div className="flex flex-col gap-[0.75rem]">
                            <div className="typography text-grayscale-950">
                                <h4>Grow Together</h4>
                            </div>
                            <p className="text-large text-grayscale-600">
                                Progress is a shared journey. We grow by learning from one another and lifting each other up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}