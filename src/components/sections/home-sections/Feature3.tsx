import stock10 from '../../../assets/images/stock10.jpeg';

const Feature3 = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:pb-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img className="object-cover w-full h-full" src={stock10} alt=""/>
          </div>
          <div
            className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-r from-gray-900 via-gray-900/50 lg:via-gray-900/20 to-transparent">
          </div>

          <div className="relative p-8 sm:py-12 sm:px-16 sm:max-w-lg">

            <p className="mt-0 text-2xl font-bold text-white sm:text-3xl">
              <a href="#" title="" className="">
                Why Choose Bugs B Gone?
              </a>
            </p>
            
            <p className="mt-4 text-base font-normal leading-7 text-white">
              Trust in our proven track record and join countless satisfied customers. Experience peace of mind knowing your home and business are protected by the best in the industry.

            </p>
            <div className="mt-12">
              <a href="/about-us" title=""
                 className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-logoGreen border border-transparent rounded-lg hover:bg-emerald-700 focus:outline-none"
                 role="button">
                See what we're about
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;