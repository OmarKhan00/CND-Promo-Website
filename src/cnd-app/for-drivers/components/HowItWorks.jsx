import MyImage from '../../../assets/user-process-1.png';
import MyImage2 from '../../../assets/user-process-2.png';
import MyImage3 from '../../../assets/user-process-3.png';

const HowItWorks = () => {
    return (
      <section className="py-16 bg-white-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="rb-5 mb-9 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay">How It Works</h2>
  
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-center mb-16">
            <img
              src={MyImage}
              alt="List your charger"
              className="w-full md:w-[55%] rounded-2xl shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div className="w-full md:w-[60%]">
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay">1. Search</h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Find nearby home chargers available when and where you need them.
              </p>
            </div>
          </div>
  
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-center mb-16">
            <img
              src={MyImage2}
              alt="Set pricing and availability"
              className="w-full md:w-[55%] rounded-2xl shadow-md mb-6 md:mb-0 md:ml-8"
            />
            <div className="w-full md:w-[45%]">
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay">2. Book</h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Reserve a charger in seconds with transparent pricing and secure payment.
              </p>
            </div>
          </div>
  
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center md:items-center mb-16">
            <img
              src={MyImage3}
              alt="Start earning"
              className="w-full md:w-[55%] rounded-2xl shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div className="w-full md:w-[45%]">
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay">3. Charge and Go </h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Plug in, power up, and hit the road with peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default HowItWorks;
  