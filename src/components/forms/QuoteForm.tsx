// QuoteForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().optional(),
});

export const QuoteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(`${API_URL}/api/get-quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert("Error submitting quote request");
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    form.reset();
  };

  return (
    <div className="lg:pl-12 md:pt-0 pt-16 animate__animated animate__fadeInRight">
      <div className="overflow-hidden bg-white rounded-md">
        <div className="p-6 sm:p-10">
          {isSubmitted ? (
            <div className="flex flex-col items-center space-y-6 py-10 text-xl">
              <h3 className="text-3xl font-semibold text-black">Thank you!</h3>
              <p className="text-center">
                Your quote request has been received. We will contact you shortly.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-emerald-500 border border-transparent rounded-md focus:outline-none hover:bg-emerald-600 focus:bg-emerald-600"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-3xl font-semibold text-black">Have a pest problem?</h3>
              <p className="mt-4 text-base text-gray-600">
                Fill out the form and we will get back to you as soon as possible.
              </p>

              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    Your name
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your full name"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-600 mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-600 mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="text-base font-medium text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                      {...form.register("phone")}
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-600 mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="text-base font-medium text-gray-900">
                    Tell us about the problem
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={4}
                      className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 caret-emerald-500"
                      {...form.register("message")}
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="text-red-600 mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-emerald-500 border border-transparent rounded-md focus:outline-none hover:bg-emerald-600 focus:bg-emerald-600"
                  >
                    Get Free Quote
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
