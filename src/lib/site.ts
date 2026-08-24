// Central place to swap in real business details once you have them.
export const siteConfig = {
  name: "Lobster Factory",
  tagline: "Boil & Grill",
  description:
    "Fresh seafood boils, mac & cheese, and shareables. Fresh ingredients, bold flavors, your boil your way. Call ahead for takeout.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lobsterfactory.com",
  phone: "+16479069143",
  phoneDisplay: "(647) 906-9143",
  phone2: "+14374341917",
  phone2Display: "(437) 434-1917",
  smsBody: "Hi! I'd like to place a takeout order at Lobster Factory:",
  email: "lobsterfactory5@gmail.com",
  address: {
    line1: "335 Yonge St",
    city: "Toronto",
    state: "ON",
    zip: "",
  },
  hours: [{ day: "Every Day", time: "11AM – 11PM" }],
  social: {
    instagram: "https://www.instagram.com/lobsterfactory335/",
    tiktok: "https://tiktok.com/@lobster.factory",
    facebook: "https://facebook.com/lobsterfactory",
    yelp: "https://yelp.com/biz/lobsterfactory",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=335+Yonge+St,+Toronto,+ON&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

