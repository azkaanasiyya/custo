export default function HomeStats() {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col gap-[3rem] w-full max-w-[67rem]">
        <div className="flex flex-col gap-[1.25rem] items-center py-[2.5rem] bg-amber-500">
          <h2 className="font-sans font-semibold leading-[140%] text-[2.5rem] text-primary-500">
            10K+
          </h2>
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-sans font-semibold leading-[140%] text-[1.5rem]">
              Users Worldwide
            </h4>
            <p className="text-m text-grayscale-600">
              Businesses trust Custo to streamline sales and manage customer
              relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
