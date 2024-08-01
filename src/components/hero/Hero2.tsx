const Hero2 = ({ img, h1, p }: any) => {
    return (
      <div className="relative pt-12 pb-12 bg-black xl:pt-16 sm:pb-16 lg:pb-16">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full" src={img} alt="" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative flex items-center justify-center h-full">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="tracking-tighter text-white">
                <span className="font-helvetica-bold-condensed text-3xl lg:text-8xl">{h1}</span>
              </h1>
              <p className="mt-5 font-helvetica-regular text-base text-white text-opacity-70">{p}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Hero2;
  