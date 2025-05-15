import Image from "next/image";

export default function ContentBlogDetail() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-[2rem] w-full max-w-[67rem]">
        <div className="flex flex-col gap-[1.5rem] px-[5.6875rem] py-[3rem]">
          <p className="text-xl-regular text-grayscale-600">
            A CRM is more than just a tool for storing customer data, it’s a
            game-changer for sales teams looking to improve efficiency, close
            deals faster, and scale their operations. Here are five powerful
            ways a CRM can transform your sales performance and help your
            business grow.
          </p>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Keep All Customer Data in One Place
          </h4>
          <p className="text-xl-regular text-grayscale-600">
            A centralized CRM system ensures your sales team has quick access to
            customer information, making interactions more personalized and
            efficient. With all contact details, communication history, and deal
            progress in one place, your team can respond faster and build
          </p>
          <div className="relative w-full aspect-[5/3]">
            <Image
              src="/blogdetails/effective1.svg"
              alt="Description of the image"
              fill
              className="object-cover rounded-[1rem]"
            />
          </div>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Automate Your Sales Follow-Ups
          </h4>
          <div>
            <p className="text-xl-regular text-grayscale-600">
              Following up with leads at the right time is crucial for closing
              deals. A CRM automates this process by scheduling follow-up emails
              and sending personalized messages based on customer behavior.
            </p>
            <ul className="list-disc pl-[1rem] text-xl-regular text-grayscale-600">
              <li>
                Set up reminders for follow-ups, calls, and emails to stay
                engaged with leads.
              </li>
              <li>
                Use email automation to nurture prospects and keep communication
                consistent.
              </li>
              <li>Never miss an opportunity due to forgotten follow-ups.</li>
            </ul>
          </div>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Make Smarter Decisions with Data Insights
          </h4>
          <p className="text-xl-regular text-grayscale-600">
            A centralized CRM system ensures your sales team has quick access to
            customer information, making interactions more personalized and
            efficient. With all contact details, communication history, and deal
            progress in one place, your team can respond faster and build
          </p>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Keep All Customer Data in One Place
          </h4>
          <p className="text-xl-regular text-grayscale-600">
            CRM analytics provide valuable insights into sales trends, team
            performance, and customer behavior. By leveraging real-time reports
            and dashboards, businesses can refine their strategies and focus on
            high-potential leads.
          </p>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Improve Collaboration Across Teams
          </h4>
          <p className="text-xl-regular text-grayscale-600">
            A CRM allows seamless coordination between sales, marketing, and
            customer support teams. By sharing notes, tasks, and deal updates,
            teams can work together efficiently and ensure a smooth customer
            experience.
          </p>
          <h4 className="font-sans font-semibold text-[1.5rem] leading-[140%]">
            Forecast Sales and Plan Strategically
          </h4>
          <p className="text-xl-regular text-grayscale-600">
            With predictive analytics and pipeline tracking, sales teams can
            anticipate future revenue and identify potential bottlenecks. This
            helps businesses allocate resources effectively and adjust
            strategies for better deal closures.
          </p>
        </div>
      </div>
    </div>
  );
}
