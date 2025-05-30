import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/common/header";
import { faqs } from "../data/faqs";
import SlideFadeIn from "../animation/on-scroll/SlideFadeIn";

export default function FAQs() {
  return (
    <SlideFadeIn
      items={[
        {
          selector: "[data-animate='faq-1']",
          direction: "y",
          from: -100,
        },
        {
          selector: "[data-animate='faq-2']",
          direction: "x",
          from: -100,
          delay: 0.1,
        },
      ]}
      staggerDelay={0.15}
    >
      <div className="faqs-section py-12 md:py-20 lg:py-[6.5rem] px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center">
        <div className="container max-w-mobile md:max-w-tablet lg:max-w-desktop gap-10 md:gap-16 flex flex-col justify-center items-center">
          <div data-animate="faq-1">
            <Header
              title="Frequently Asked Questions"
              description="Find quick answers to common questions about Custo."
            />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col gap-[3rem] w-full max-w-[67rem]">
              <Accordion
                type="single"
                collapsible
                className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-10"
              >
                {faqs.map((faq,index) => (
                  <div key={index} data-animate="faq-2">
                    <AccordionItem value={faq.value} key={faq.value}>
                      <AccordionTrigger>{faq.title}</AccordionTrigger>
                      <AccordionContent>{faq.description}</AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </SlideFadeIn>
  );
}
