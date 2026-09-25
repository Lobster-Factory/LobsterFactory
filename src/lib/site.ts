// Central place to swap in real business details once you have them.
export const siteConfig = {
  name: "Lobster Factory",
  tagline: "Boil & Grill",
  description:
    "Fresh seafood boils, mac & cheese, and shareables. Fresh ingredients, bold flavors, your boil your way. Call ahead for takeout.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lobsterfactory.ca",
  phone: "+14162059746",
  phoneDisplay: "(416) 205-9746",
  smsBody: "Hi! I'd like to place a takeout order at Lobster Factory:",
  email: "lobsterfactory5@gmail.com",
  address: {
    line1: "335 Yonge St",
    city: "Toronto",
    state: "ON",
    zip: "",
  },
  hours: [
    { day: "Monday – Friday", time: "5 PM – 11 PM" },
    { day: "Saturday – Sunday", time: "12 PM – 12 AM" },
  ],
  social: {
    instagram: "https://www.instagram.com/lobsterfactory335/",
    tiktok: "https://tiktok.com/@lobster.factory",
    yelp: "https://yelp.com/biz/lobsterfactory",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=335+Yonge+St,+Toronto,+ON&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

