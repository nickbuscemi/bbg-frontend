
const ContactInfo = () => {
  return (
    <section className="flex justify-center relative py-12 overflow-hidden bg-logoGreen sm:py-16 lg:py-20 xl:py-24">

            <ul className="mt-16 space-y-12 xl:mt-2">
              <li className="flex items-start">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">
                    Office Hours
                  </h3>
                  <p className="mt-2 text-lg font-normal text-gray-200">
                    Monday-Friday <br></br>8:00 am to 5:00 pm
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">
                    Our Address
                  </h3>
                  <p className="mt-2 text-lg font-normal text-gray-200">
                     17 Carston St W<br></br> Selden, New York 11784 </p>
                </div>
              </li>

              <li className="flex items-start">
                <div
                  className="inline-flex items-center justify-center w-10 h-10 text-white bg-blue-600 rounded-full shrink-0">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>

                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-white">
                    Get In Touch
                  </h3>
                  <p className="mt-2 text-lg font-normal text-gray-200">
                    +1-(631) 316-5618 <br></br>+1-(631) 678-2341
                  </p>
                </div>
              </li>
            </ul>
         
    </section>
  );
}

export default ContactInfo;