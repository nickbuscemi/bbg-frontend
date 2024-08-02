

export const QuoteForm = () => {
  return (
    <div className="lg:pl-12 md:pt-0 pt-16 animate__animated animate__fadeInRight">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-6 sm:p-10">
                <h3 className="text-3xl font-semibold text-black">Have a pest problem?</h3>
                <p className="mt-4 text-base text-gray-600">
                    Fill out the form and we will get back to you as soon as possible.
                </p>

                <form action="#" method="POST" className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-900">
                        Your name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="text-base font-medium text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-2.5 relative">
                            <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                            />
                        </div>
                    </div>


                    <div>
                      <label htmlFor="project-brief" className="text-base font-medium text-gray-900">
                        Tell us about the problem
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="project-brief"
                          id="project-brief"
                          placeholder="Enter your project brief"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                          rows={4}
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-500 border border-transparent rounded-md focus:outline-none hover:bg-emerald-600 focus:bg-emerald-600"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
  )
}

