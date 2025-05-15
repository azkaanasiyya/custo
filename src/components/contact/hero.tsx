import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactHero() {
    return (
        <div className="hero-section bg-[url('/background/bg-pricing.png')] bg-cover pt-40 pb-[6.5rem] px-16 flex flex-col justify-center items-center">
            <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-10">
                <div className="header flex flex-col gap-4 justify-center items-center">
                    <div className="typography text-grayscale-950 text-center">
                        <h1>Get in Touch</h1>
                    </div>
                    <p className="text-xlarge max-w-[470px] text-center text-gray-600">Whether you have a question, need support, or just wantto say hello, we’re here and ready to help.</p>
                </div>
                <div className="form p-7 w-[708px] bg-white rounded-[1.25rem] border border-grayscale-200 flex flex-col gap-5">
                    <div className="input flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <Label>First name</Label>
                                <Input type="text" placeholder="John" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Last name</Label>
                                <Input type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Email address</Label>
                            <Input type="text" placeholder="johndoe@gmail.com" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Subject</Label>
                            <Input type="text" placeholder="Custom Plan" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Messsage</Label>
                            <Textarea placeholder="Enter your message.." />
                        </div>
                    </div>
                    <Button variant={"primary"} size={"base"}>Send Message</Button>
                </div>
            </div>
        </div>
    )
}