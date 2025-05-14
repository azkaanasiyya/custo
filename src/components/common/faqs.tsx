import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/common/header";

export default function FAQs() {
  return (
    <div className="faqs-section py-[104px] px-16 flex flex-col justify-center items-center">
      <div className="container max-w-[67rem] gap-16 flex flex-col justify-center items-center">
        <Header
                  title="Frequently Asked Questions"
                  description="Find quick answers to common questions about Custo."
        />
      <div className="flex w-full justify-center">
        <div className="flex flex-col gap-[3rem] w-full max-w-[67rem] py-[6.5rem]">
          <Accordion
            type="single"
            collapsible
            className="w-full grid grid-cols-2 gap-[1.2rem]"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How often is Custo updated with new features?
              </AccordionTrigger>
              <AccordionContent>
                Custo receives regular updates with new features, performance
                improvements, and security patches to ensure your CRM stays fast,
                secure, and reliable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is there a free trial available before subscribing?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Custo offers a free trial so you can explore all core
                features, test workflows, and decide if it fits your business, no
                credit card required.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I manage multiple pipelines at once?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Custo allows you to create and manage multiple custom
                pipelines and control over every stage of your sales process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What types of businesses can use Custo?
              </AccordionTrigger>
              <AccordionContent>
                Custo is flexible and scalable, making it ideal for startups,
                agencies, small businesses, and teams that need a streamlined way
                to manage customer data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I import data from spreadsheets or another CRM?
              </AccordionTrigger>
              <AccordionContent>
                Yes, importing is easy with our guided import tool, which supports
                CSV files and structured data from most CRM platforms with just a
                few simple steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How does Custo handle data backups?
              </AccordionTrigger>
              <AccordionContent>
                We run automated backups on a regular schedule, storing data
                securely in the cloud to ensure your information stays protected
                and always recoverable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Will I lose data if I downgrade my plan?
              </AccordionTrigger>
              <AccordionContent>
                No worries, your data stays intact. Some features may be limited,
                but you’ll never lose important info when changing or downgrading
                your plan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        </div>
      </div>
    </div>
  );
}
