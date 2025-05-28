import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn"; 

export default function ContactHero() {
  return (
    <div className="p-2">
      <div className="hero-section bg-[url('/background/bg-pricing.png')] bg-cover bg-center rounded-[12px] pt-40 pb-12 md:pb-20 lg:pb-[6.5rem] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
        <SlideFadeIn
          items={[
            { selector: "[data-animate='header']", direction: "y", from: 60 },
            { selector: "[data-animate='form']", direction: "y", from: 60 },
          ]}
          staggerDelay={0.2}
        >
          <div className="container max-w-[67rem] flex flex-col justify-center items-center gap-10">
            <div className="header flex flex-col gap-4 justify-center items-center" data-animate="header">
              <div className="text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] font-semibold text-grayscale-950 text-center">
                <h1>Get in Touch</h1>
              </div>
              <p className="text-xlarge max-w-[470px] text-center text-gray-600">
                Whether you have a question, need support, or just want to say hello, we’re here and ready to help.
              </p>
            </div>
            <div className="form p-5 md:p-7 w-full lg:w-[708px] bg-white rounded-[1.25rem] border border-grayscale-200 flex flex-col gap-5" data-animate="form">
              <div className="input flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              <Button variant={"primary"} size={"base"}>
                Send Message
              </Button>
            </div>
          </div>
        </SlideFadeIn>
      </div>
    </div>
  );
}
