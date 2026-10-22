import type { LucideIcon } from "lucide-react";
import {
  Bed,
  Briefcase,
  Bug,
  ClipboardList,
  Droplets,
  Home,
  Hospital,
  Hotel,
  Rat,
  Store,
  Utensils,
  Warehouse,
} from "lucide-react";

import techPlanningTablet from "@/assets/photos/tech-planning-tablet.webp";
import termitesWood from "@/assets/photos/termites-wood.webp";
import mousetrap from "@/assets/photos/mousetrap.webp";
import techBaseboardSpray from "@/assets/photos/tech-baseboard-spray.webp";
import mattressInspection from "@/assets/photos/mattress-inspection.webp";
import techSprayingLawn from "@/assets/photos/tech-spraying-lawn.webp";
import commercialOffice from "@/assets/photos/commercial-office.webp";
import commercialRestaurant from "@/assets/photos/commercial-restaurant.webp";
import commercialRetail from "@/assets/photos/commercial-retail.webp";
import commercialWarehouse from "@/assets/photos/commercial-warehouse.webp";
import commercialHotel from "@/assets/photos/commercial-hotel.webp";
import commercialHealthcare from "@/assets/photos/commercial-healthcare.webp";

export type Audience = "residential" | "commercial";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  included: string[];
  image: string;
  imageAlt: string;
}

export const residentialServices: Service[] = [
  {
    slug: "home-inspections",
    title: "Home Inspections",
    icon: ClipboardList,
    summary: "A top-to-bottom look for pests, entry points, and the conditions that attract them.",
    description:
      "Every plan starts here. We walk your home inside and out, including the basement, kitchens, bathrooms, and exterior perimeter, to find out what's there, how it's getting in, and what's drawing it. You get a clear explanation and a treatment plan built for your home.",
    included: [
      "Interior and exterior inspection",
      "Pest identification and activity assessment",
      "Entry point and moisture checks",
      "A personalized treatment plan",
    ],
    image: techPlanningTablet,
    imageAlt: "Technician reviewing an inspection plan on a tablet with a homeowner",
  },
  {
    slug: "termite-control",
    title: "Termite Control",
    icon: Home,
    summary: "Find and stop termite activity before it turns into costly structural damage.",
    description:
      "Termites can quietly damage wood for years before you notice. On Long Island, eastern subterranean termites are the usual culprit. We inspect foundations, basements, and wood structures, treat active colonies, and help you cut down the moisture and wood-to-soil contact that invites them back.",
    included: [
      "Foundation, basement and crawl space inspection",
      "Targeted treatment of active termite activity",
      "Moisture and wood-contact recommendations",
      "Follow-up visits to confirm results",
    ],
    image: termitesWood,
    imageAlt: "Termites tunneling through damaged wood",
  },
  {
    slug: "rodent-control",
    title: "Rodent Control",
    icon: Rat,
    summary: "Remove mice and rats, then close up the gaps they use to get inside.",
    description:
      "Mice and rats contaminate food, chew wiring, and multiply fast. We locate activity and entry points, set traps and bait where they're needed, and recommend exclusion work so rodents can't find their way back in.",
    included: [
      "Activity and entry point inspection",
      "Trapping and baiting where it's needed",
      "Exclusion recommendations",
      "Monitoring and follow-up",
    ],
    image: mousetrap,
    imageAlt: "Baited snap trap set on a floor",
  },
  {
    slug: "ant-control",
    title: "Ant Control",
    icon: Bug,
    summary: "Treat the colony at its source, not just the trail you see in the kitchen.",
    description:
      "Spraying the ants you can see rarely solves the problem. We identify the species, trace the trail back to the nest, and treat at the source. That includes carpenter ants, which can nest inside damp or damaged wood.",
    included: [
      "Species identification",
      "Nest location and targeted treatment",
      "Carpenter ant inspection",
      "Prevention tips to keep them out",
    ],
    image: techBaseboardSpray,
    imageAlt: "Technician applying treatment along an interior baseboard",
  },
  {
    slug: "bed-bug-treatment",
    title: "Bed Bug Treatment",
    icon: Bed,
    summary: "Careful inspection and treatment to get you sleeping soundly again.",
    description:
      "Bed bugs hide in seams, furniture joints, and cracks, and they spread easily from room to room. We inspect sleeping and living areas closely, treat every affected area, and come back to make sure the infestation is gone.",
    included: [
      "Room-by-room inspection",
      "Treatment of mattresses, furniture and hiding spots",
      "Preparation guidance before your visit",
      "Follow-up inspection",
    ],
    image: mattressInspection,
    imageAlt: "Gloved technician inspecting a mattress seam for bed bugs",
  },
  {
    slug: "mosquito-control",
    title: "Mosquito Control",
    icon: Droplets,
    summary: "Take back your yard by targeting where mosquitoes breed and rest.",
    description:
      "Mosquitoes breed in standing water and rest in shady, damp plants. We treat the areas around your property where they live and breed, and point out the water sources to get rid of, so you can enjoy your yard again.",
    included: [
      "Yard and breeding site inspection",
      "Treatment of resting areas and vegetation",
      "Standing water recommendations",
      "Seasonal treatment options",
    ],
    image: techSprayingLawn,
    imageAlt: "Technician spraying a backyard lawn and hedges",
  },
];

export const commercialServices: Service[] = [
  {
    slug: "office-buildings",
    title: "Office Buildings",
    icon: Briefcase,
    summary: "Discreet service that keeps workspaces, break rooms, and shared areas pest-free.",
    description:
      "Pests in the office hurt morale and your reputation. We work around your schedule to inspect and treat break rooms, restrooms, storage, and common areas, and keep a regular service plan in place so problems don't build up.",
    included: [
      "Service scheduled around business hours",
      "Break room, restroom and storage treatment",
      "Monthly or quarterly service plans",
      "Recommendations for facility staff",
    ],
    image: commercialOffice,
    imageAlt: "Modern office corridor lined with glass-walled rooms",
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    icon: Utensils,
    summary: "Protect your kitchen, your customers, and your next health inspection.",
    description:
      "Food service businesses can't afford a pest sighting. We focus on kitchens, storage, and waste areas where cockroaches, rodents, and flies thrive, and set up a recurring plan to help you keep the standards inspectors expect.",
    included: [
      "Kitchen, storage and dumpster area treatment",
      "Cockroach, rodent and fly control",
      "Recurring service plans",
      "Sanitation and exclusion recommendations",
    ],
    image: commercialRestaurant,
    imageAlt: "Restaurant kitchen line with steam rising from stockpots",
  },
  {
    slug: "retail-stores",
    title: "Retail Stores",
    icon: Store,
    summary: "Keep pests out of sight of shoppers and away from your inventory.",
    description:
      "One pest sighting on the sales floor can cost you customers. We inspect stockrooms, entryways, and receiving areas, treat active problems, and help you block the gaps pests use to get in from neighboring units.",
    included: [
      "Sales floor and stockroom inspection",
      "Entryway and receiving area treatment",
      "Exclusion recommendations",
      "Service scheduled around store hours",
    ],
    image: commercialRetail,
    imageAlt: "Clothing boutique with racks of colorful garments",
  },
  {
    slug: "warehouses",
    title: "Warehouses",
    icon: Warehouse,
    summary: "Protect stored products, packaging, and loading areas.",
    description:
      "Large footprints, loading docks, and stored goods make warehouses a target for rodents, birds, and stored-product insects. We set up a monitoring and treatment program sized to your facility to protect your inventory.",
    included: [
      "Perimeter and loading dock inspection",
      "Rodent monitoring and control",
      "Stored-product pest treatment",
      "Ongoing service plans",
    ],
    image: commercialWarehouse,
    imageAlt: "Warehouse aisle lined with tall pallet racks of stored goods",
  },
  {
    slug: "hotels",
    title: "Hotels",
    icon: Hotel,
    summary: "Fast, discreet response that protects the guest experience.",
    description:
      "A single bed bug report can follow a property for years. We provide careful room inspections and discreet treatment, plus ongoing service for kitchens, laundry, and common areas.",
    included: [
      "Guest room bed bug inspection and treatment",
      "Discreet, low-disruption service",
      "Kitchen, laundry and common area coverage",
      "Emergency visits for urgent situations",
    ],
    image: commercialHotel,
    imageAlt: "Hotel guest room with a made king bed and city view",
  },
  {
    slug: "healthcare-facilities",
    title: "Healthcare Facilities",
    icon: Hospital,
    summary: "Careful pest management for places where safety comes first.",
    description:
      "Clinics, offices, and care facilities need pest control that's effective and mindful of patients and staff. We tailor treatment methods and timing to sensitive areas and keep a consistent service schedule in place.",
    included: [
      "Treatment methods suited to sensitive areas",
      "Scheduling around patient care",
      "Ongoing monitoring",
      "Clear recommendations for staff",
    ],
    image: commercialHealthcare,
    imageAlt: "Clean, empty hospital corridor with handrails",
  },
];

export const servicesByAudience: Record<Audience, Service[]> = {
  residential: residentialServices,
  commercial: commercialServices,
};

export const allServices = [...residentialServices, ...commercialServices];

export const processSteps = [
  {
    title: "Contact us",
    text: "Call, email, or send the form to tell us what you're seeing. We'll set up a time that works for you.",
  },
  {
    title: "Inspect & diagnose",
    text: "We inspect your property to identify the pest, how it's getting in, and how far the problem has spread.",
  },
  {
    title: "Treat",
    text: "We treat the problem and walk you through monthly or quarterly maintenance options.",
  },
  {
    title: "Follow up",
    text: "We follow up to make sure the problem is solved, with emergency visits available for urgent situations.",
  },
];

// Value used by the quote form's service <select> (and ?service= links that pre-select it)
export const serviceOptionValue = (audience: Audience, title: string) =>
  audience === "commercial" ? `Commercial: ${title}` : title;
