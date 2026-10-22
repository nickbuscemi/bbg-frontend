import { site } from "./site";

export const faqs = [
  {
    question: "What areas do you serve?",
    answer: `We serve ${site.serviceAreaSummary}: Nassau and Suffolk counties, Queens, Brooklyn, Manhattan, the Bronx, and Staten Island. Our office is in ${site.address.city}. You can check your ZIP code on our Service Areas page.`,
  },
  {
    question: "How do I get a quote, and does it cost anything?",
    answer: `Quotes are free and there's no obligation. Fill out the quote form or call ${site.phone}, tell us what you're seeing, and we'll get back to you as soon as possible.`,
  },
  {
    question: "What happens on the first visit?",
    answer:
      "We start with an inspection to identify the pest, find out how it's getting in, and see how far the problem has spread. Then we explain what we found, recommend a treatment plan, and handle the initial treatment.",
  },
  {
    question: "Do you offer ongoing service plans?",
    answer:
      "Yes. After the initial treatment, we can set you up with monthly or quarterly maintenance so problems don't come back. If you only need a one-time service, that's available too.",
  },
  {
    question: "Are your treatments safe for my family and pets?",
    answer:
      "Safety comes first. We use safe, eco-conscious methods and tailor every treatment to your property. If you have kids, pets, or other concerns, let us know and we'll walk you through the plan before we begin.",
  },
  {
    question: "What if the pests come back?",
    answer:
      "Every service is backed by our 100% satisfaction guarantee. If pests return between scheduled visits, contact us and we'll follow up until the problem is solved.",
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes. We provide commercial pest control for offices, restaurants, retail stores, warehouses, hotels, and healthcare facilities, with service scheduled around your business hours.",
  },
  {
    question: "What are your hours? Do you handle emergencies?",
    answer: `Our office is open ${site.hours.map(({ days, time }) => `${days}, ${time}`).join("; ")}. Emergency visits are available for urgent situations. Call ${site.phone}.`,
  },
];
