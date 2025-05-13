export default function HomeStats() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-row gap-[3rem] w-full max-w-[67rem] py-[4rem]">
        <div className="flex flex-col gap-[1.25rem] items-center py-[2.5rem]">
          <h2 className="font-sans font-semibold leading-[140%] text-[2.5rem] text-primary-500">
            10K+
          </h2>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-sans font-semibold leading-[140%] text-[1.5rem]">
              Users Worldwide
            </h4>
            <p className="text-m text-grayscale-600 text-center">
              Businesses trust Custo to streamline sales and manage customer
              relationships.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.25rem] items-center py-[2.5rem]">
          <h2 className="font-sans font-semibold leading-[140%] text-[2.5rem] text-primary-500">
            30%
          </h2>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-sans font-semibold leading-[140%] text-[1.5rem]">
              Faster Sales Cycles
            </h4>
            <p className="text-m text-grayscale-600 text-center">
              Optimize your sales process and close deals more efficiently with
              automated workflows.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.25rem] items-center py-[2.5rem]">
          <h2 className="font-sans font-semibold leading-[140%] text-[2.5rem] text-primary-500">
            $1B
          </h2>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-sans font-semibold leading-[140%] text-[1.5rem]">
              in Deals Closed
            </h4>
            <p className="text-m text-grayscale-600 text-center">
              Track high-value opportunities and drive revenue growth
              effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
