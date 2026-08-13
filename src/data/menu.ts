export type MenuOption = { label: string; icon?: string };

// Individual Boil: pick any one of these (served 1 lb)
export const boilProteins: MenuOption[] = [
  { label: "Shrimp", icon: "🦐" },
  { label: "Mussels", icon: "🦪" },
  { label: "Clams", icon: "🐚" },
  { label: "Chicken Slices", icon: "🍗" },
  { label: "Dungeness Crab", icon: "🦀" },
  { label: "Snow Crab Legs", icon: "🦀" },
  { label: "Lobster", icon: "🦞" },
  { label: "King Crab Legs", icon: "🦀" },
];

// Mix & Match: pick exactly 2 of these (served 1/2 lb each)
export const mixMatchProteins: MenuOption[] = [
  { label: "Shrimp", icon: "🦐" },
  { label: "Mussels", icon: "🦪" },
  { label: "Clams", icon: "🐚" },
  { label: "Chicken Slices", icon: "🍗" },
];

export const sauces: MenuOption[] = [
  { label: "Cajun" },
  { label: "Garlic Butter" },
  { label: "Lemon Pepper" },
  { label: "House Special" },
];

export const spiceLevels: MenuOption[] = [
  { label: "Mild", icon: "🌶️" },
  { label: "Medium", icon: "🌶️🌶️" },
  { label: "Hot", icon: "🌶️🌶️🌶️" },
  { label: "Extra Hot", icon: "🌶️🌶️🌶️🌶️" },
];

// Included with every boil — choose any 2
export const regularSides: MenuOption[] = [
  { label: "Corn", icon: "🌽" },
  { label: "Potato", icon: "🥔" },
  { label: "Egg", icon: "🥚" },
  { label: "Rice", icon: "🍚" },
];

// Extra-cost add-ons on top of the 2 included sides
export const premiumAddOns: MenuOption[] = [
  { label: "Broccoli", icon: "🥦" },
  { label: "Okra", icon: "🫛" },
  { label: "Sausage", icon: "🌭" },
  { label: "Noodle", icon: "🍜" },
];

export const macAndCheeseProteins: MenuOption[] = [
  { label: "Chicken", icon: "🍗" },
  { label: "Baby Shrimp", icon: "🦐" },
  { label: "Lobster Chunk", icon: "🦞" },
];

export const friedRiceProteins: MenuOption[] = [
  { label: "Seafood", icon: "🦐" },
  { label: "Chicken", icon: "🍗" },
  { label: "Sausage", icon: "🌭" },
];

export const catchAndCrunch = [
  "Calamari",
  "Sweet Potato Fries",
  "Shrimp Basket",
  "Chicken Tenders",
  "Cajun Fries",
];

