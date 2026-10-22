// Service area: Long Island (Nassau + Suffolk) and all five NYC boroughs.
// Matched by USPS 3-digit ZIP prefix, which lines up cleanly with these regions.
// Values read as "we serve 11784 ___".
const AREA_BY_PREFIX: Record<string, string> = {
  "100": "in Manhattan",
  "101": "in Manhattan",
  "102": "in Manhattan",
  "103": "on Staten Island",
  "104": "in the Bronx",
  "111": "in Queens",
  "112": "in Brooklyn",
  "113": "in Queens",
  "114": "in Queens",
  "116": "in Queens",
  "110": "on Long Island",
  "115": "on Long Island",
  "117": "on Long Island",
  "118": "on Long Island",
  "119": "on Long Island",
};

// 110xx is mostly Nassau County, but these two are in Queens.
const AREA_BY_ZIP: Record<string, string> = {
  "11004": "in Queens",
  "11005": "in Queens",
};

export type ZipResult =
  | { status: "invalid" }
  | { status: "served"; zip: string; area: string }
  | { status: "outside"; zip: string };

export function checkZip(input: string): ZipResult {
  const zip = input.trim();
  if (!/^\d{5}$/.test(zip)) return { status: "invalid" };

  const area = AREA_BY_ZIP[zip] ?? AREA_BY_PREFIX[zip.slice(0, 3)];
  return area ? { status: "served", zip, area } : { status: "outside", zip };
}

export const serviceRegions = [
  {
    name: "Suffolk County",
    group: "Long Island",
    note: "Home base. Our office is in Selden.",
  },
  { name: "Nassau County", group: "Long Island" },
  { name: "Queens", group: "New York City" },
  { name: "Brooklyn", group: "New York City" },
  { name: "Manhattan", group: "New York City" },
  { name: "The Bronx", group: "New York City" },
  { name: "Staten Island", group: "New York City" },
];
