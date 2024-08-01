import stock12 from '../../../assets/images/stock12.jpeg';
import stock2 from '../../../assets/images/stock2.jpg';

const About2 = () => {        
    return (
          <section className="py-12 bg-white sm:py-16 lg:py-2 font-helvetica-bold-condensed">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Go with Us?
          </h1>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 aspect-w-16 aspect-h-9 lg:aspect-h-6">
          <img className="object-cover w-full h-full rounded-lg" src={stock12} alt=""/>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          <div className="lg:col-span-2 lg:self-start lg:sticky lg:top-6 lg:order-last">
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <article
            className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">
            
            <p>
            Choosing Bugs B Gone means opting for unparalleled expertise and dedicated service. Our team of professionals employs the latest techniques and eco-friendly solutions to ensure a pest-free environment. We prioritize your safety and satisfaction, offering personalized treatments tailored to your unique needs. Our commitment to excellence guarantees that every infestation is handled with precision and care. Trust in our proven track record and join countless satisfied customers who have made Bugs B Gone their go-to for reliable and effective pest control. Experience peace of mind knowing your home and business are protected by the best in the industry.
            </p>

            <br></br>

            <p>
            At Bugs B Gone, we believe in a comprehensive approach to pest control. From the moment you contact us, our friendly and knowledgeable staff will guide you through the process, ensuring that all your concerns are addressed. We provide detailed inspections to pinpoint the exact nature of the pest problem and develop a targeted treatment plan. Our eco-friendly methods not only eliminate pests but also protect your family, pets, and the environment.
            </p>

            <br></br>

            <p>
            We understand that every home and business is unique, which is why we offer customized treatment plans to suit your specific needs. Whether you require a one-time service or ongoing maintenance, we have flexible options to keep your property pest-free year-round. Our goal is to provide a hassle-free experience, allowing you to focus on what matters most while we take care of the pests.
            </p>
            <br></br>
            <br></br>


            <img className="object-cover w-full rounded-lg" src={stock2} alt=""/>

            <br></br>
            <br></br>

            <p className="text-lg font-medium text-logoGreen font-pj">HOW TO START THE PROCESS?</p>

            <p>Click below to contact us!</p>
            <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-100 transition-all duration-200 bg-logoGreen rounded-md lg:mt-6 hover:bg-emerald-800 focus:bg-emerald-400" role="button">
                Get a Free Estimate
            </a>
          </article>
        </div>
      </div>
    </section>
    )
}
export default About2;