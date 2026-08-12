// Central place to swap in real business details once you have them.
export const siteConfig = {
  name: "Lobster Factory",
  tagline: "Boil & Grill",
  description:
    "Fresh seafood boils, mac & cheese, and shareables. Fresh ingredients, bold flavors, your boil your way. Call ahead for takeout.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lobsterfactory.example.com",
  phone: "+15551234567",
  phoneDisplay: "(555) 123-4567",
  smsBody: "Hi! I'd like to place a takeout order at Lobster Factory:",
  email: "hello@lobsterfactory.example.com",
  address: {
    line1: "123 Harbor St",
    city: "Your City",
    state: "ST",
    zip: "00000",
  },
  hours: [
    { day: "Mon", time: "Closed" },
    { day: "Tue – Thu", time: "12PM – 9PM" },
    { day: "Fri – Sat", time: "12PM – 10PM" },
    { day: "Sun", time: "12PM – 8PM" },
  ],
  social: {
    instagram: "https://instagram.com/lobsterfactory",
    facebook: "https://facebook.com/lobsterfactory",
    yelp: "https://yelp.com/biz/lobsterfactory",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=123+Harbor+St&t=&z=14&ie=UTF8&iwloc=&output=embed",
};
