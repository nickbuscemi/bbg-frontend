// Single source of truth for business details shown across the site.
export const site = {
  name: "Bugs B Gone",
  legalName: "Bugs B Gone Pest Control",
  tagline: "Pest control for Long Island & NYC",
  phone: "(631) 316-5475",
  phoneHref: "tel:+16313165475",
  email: "info@bugsbgoneny.com",
  emailHref: "mailto:info@bugsbgoneny.com",
  address: {
    street: "17 Carston St W",
    city: "Selden",
    region: "NY",
    postalCode: "11784",
  },
  hours: [{ days: "Monday – Friday", time: "8:00 am – 5:00 pm" }],
  serviceAreaSummary: "Long Island and all five New York City boroughs",
};

export const pageTitle = (title?: string) =>
  title ? `${title} | ${site.legalName}` : `${site.legalName} | Long Island & NYC`;
