// React 18 doesn't know the camelCase prop yet, so pass the raw attribute for above-the-fold images.
export const highPriority = { fetchpriority: "high" } as Record<string, string>;
