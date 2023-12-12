import React from "react";

export const Pricing = () => {
  return (
    <>
      <div className="w-max mx-auto flex gap-2 my-20">
        <span>
          <img src="src\components\Pricing\assets\Logo.png" alt="" />
        </span>
        <span>pricing</span>
      </div>

      <div className="max-w-xl mx-auto my-20">
        <h5 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-[#808080]">
          As we embark on this journey together, transparency and honesty are at
          the heart of our mission.
        </h5>
      </div>

      <section className="relative h-max w-full">
        <img
          className="w-full aspect-auto"
          src="src\components\Pricing\assets\Rectangle 154.png"
          alt=""
        />
        <div className="absolute w-full h-full flex gap-3 items-center text-white top-0">
          <div className="flex h-40 items-center border mx-auto w-max justify-center gap-5">
            <div className="flex w-[30%]  flex-col">
              <span className="text-md">NO FEE TO CREATE AN IMPACT STORY</span>
              <span className="text-[#43C4B2] text-[40px] font-bold">
                $0.00
              </span>
              <span className="text-sm">
                There’s no fees charged to charged to Angels on the TOPMe
                platform
              </span>
            </div>
            <div className="h-[60%] border border-[#808080]"></div>
            <div className="flex w-[30%] flex-col">
              <span className="text-md">
                ONE-TIME TRANSACTION FEE PER DONATION
              </span>
              <span className="text-[#43C4B2] text-[40px] font-bold">2.9%</span>
              <span className="text-sm">
                Automated deductions cover payment gateway fees and operational
                costs from each donation.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[50%] mx-auto flex">
          <div className="w-1/2 text-2xl">
            Transparent Donations with Nominal Fees
          </div>
          <div className="w-1/2 space-y-5 text-sm">
            <p>
              At Topme, we're dedicated to optimizing the impact of your
              donations while upholding the platform's sustainability.
            </p>
            <p>
              When you donate to a cause, your contribution directly benefits
              the Angel's project. Our commitment to efficiency and
              user-friendliness ensures your support reaches those in need.
            </p>
            <p>
              To strike this balance, a minimal fee of 2.9% is deducted per
              donation, covering transaction expenses from payment processors
              like Paystack, with the remaining amount contributing to server
              maintenance for seamless operations.
            </p>
            <div className="w-20 mx-auto">
              <img
                src="src\components\Pricing\assets\paystack-seeklogo.com 1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 text-right">
        <div className="w-[50%] mx-auto flex  border-y-2 py-20">
          <div className="w-1/2 space-y-5 text-sm">
            <p>
              On the Topme platform, raised donations are sent directly to those
              in need. You have the option to donate directly to our Angels as
              well, supporting their efforts in aiding the needy.
            </p>
            <p>
              Your contribution can help cover their expenses as they work
              tirelessly to assist others, ensuring their impactful work
              continues even when personal resources may be limited.
            </p>
          </div>
          <div className="w-1/2 text-2xl">
            Empower Angels: Direct Support for Their Impactful Work
          </div>
        </div>
      </section>

      <section>
        <div className="w-[58%] mx-auto  flex">
          <div className="w-1/2 text-2xl">
            Everything you need to be an Angel
          </div>
          <div className="w-1/2 text-md">
            <p>
              You can become an Angel and create an impact in your community
              today
            </p>
            <div className="flex gap-5 my-5 text-sm">
              <button className="bg-[#43C4B2] p-2  flex gap-3  text-white">
                <span>Become an angel</span>
                <span>
                  <img src="src\components\Pricing\assets\Icon.png" alt="" />
                </span>
              </button>
              <button className="border p-2 border-black flex gap-3">
                <span>Contact support</span>
                <span>
                  <img
                    src="src\components\Pricing\assets\Icon (1).png"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
