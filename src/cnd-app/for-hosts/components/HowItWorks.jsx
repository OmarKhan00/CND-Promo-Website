import MyImage from '../../../assets/list-charger-3.png';
import MyImage2 from '../../../assets/list-charger-4-5-price.png';
import MyImage3 from '../../../assets/list-charger-6-2-payment.png';

const HowItWorks = () => {
    return (
      <section className="py-16 bg-white-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="rb-5 mb-9 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl text-governor-bay ">How It Works</h2>
  
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-center mb-16">
            <img
              src={MyImage}
              alt="List your charger"
              className="w-full md:w-[55%] rounded-2xl shadow-md mb-6 md:mb-0 md:mr-8"
            />
            <div className="w-full md:w-[60%]">
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay ">1. List Your Charger</h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Add your charger to the platform in just a few clicks. We'll guide you through setting it up quickly and easily.
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
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay ">2. Set Pricing & Availability</h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Decide when your charger is available and how much to charge. You’re in full control of your schedule and rates.
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
              <h3 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl text-governor-bay ">3. Start Earning</h3>
              <p className="text-base md:text-lg leading-relaxed text-black">
                Once your charger is listed, users can start booking. Earn money effortlessly while helping your community charge up.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default HowItWorks;
  