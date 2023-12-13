import React from "react";

export const HowItWorks = () => {
  return (
    <>
      <div className="flex gap-2 w-max mx-auto">
        <span>How</span>
        <span>
          <img src="src\components\HowItWorks\assets\Logo3.png" alt="" />
        </span>
        <span>works</span>
      </div>

      <div className="w-[68%] mx-auto text-[#808080] my-20">
        <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
          TOPMe Angels, the modern-day Good Samaritans, Playing the role of
          individual NGOs, they initiate and lead causes that address pressing
          needs around them.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-10">
        <img
          className=" mx-auto border-2 border-black rounded-md
          "
          src="src\components\HowItWorks\assets\Rectangle 151.png"
          alt=""
        />
      </div>

      <section className="mt-20 bg-black text-white py-32 px-10">
        <div className="flex max-w-5xl mx-auto gap-10">
          <div className="w-3/6">
            <div className=" pb-3">
              <h5 className="text-xs sm:text-sm md:text-md lg:text-lg">
                Support Angels: Unleash Impact
              </h5>
            </div>
            <p className="text-xs sm:text-sm md:text-md lg:text-lg ">
              Our angels drive change by identifying causes, rallying donors,
              and crafting impactful stories on the TOPME platform. While
              donations directly aid those in need, angels often face personal
              expenses. Your support fuels their dedication, covering costs and
              ensuring their focus remains on making a difference.
            </p>
          </div>
          <div className="grid w-3/6 grid-cols-[repeat(3,33%)] grid-rows-[80px] gap-4 justify-items-center items-end">
            <img
              className="self-start"
              src="src\components\TrustAndSafety\assets\Rectangle 156.png"
              alt=""
            />
            <img
              className="self-start"
              src="src\components\TrustAndSafety\assets\Rectangle 161.png"
              alt=""
            />
            <img
              className="self-start"
              src="src\components\TrustAndSafety\assets\Rectangle 163.png"
              alt=""
            />
            <img
              className="self-end"
              src="src\components\TrustAndSafety\assets\Rectangle 160.png"
              alt=""
            />
            <img
              className="self-end"
              src="src\components\TrustAndSafety\assets\Rectangle 162.png"
              alt=""
            />
            <img
              className="self-end"
              src="src\components\TrustAndSafety\assets\Rectangle 164.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F3F3F3]">
        <p className="max-w-xl mx-auto py-32 text-center text-lg">
          Remember, Topme views Angels as individual NGOs, and the platform aims
          to provide an opportunity for people already making efforts to help
          others in their community. By following these steps, Angels and donors
          can collaborate to make a meaningful impact and support worthy causes
          through the Topme crowdfunding platform.
        </p>
      </section>
    </>
  );
};
