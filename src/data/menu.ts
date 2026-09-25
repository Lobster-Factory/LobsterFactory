export type MenuOption = {
  label: string;
  price?: number;
  detail?: string;
};

export const boilProteins: MenuOption[] = [
  { label: "Shrimp", price: 18.99 },
  { label: "Headless Shrimp", price: 22.99 },
  { label: "Mussels", price: 18.99 },
  { label: "Clams", price: 18.99 },
  { label: "Chicken Slices", price: 16.99 },
  { label: "Snow Crab Legs", price: 39.99 },
  { label: "Dungeness Crab", price: 49.99 },
  { label: "Lobster", price: 55.99 },
  { label: "King Crab Legs", price: 85.99 },
];

export const sauces: MenuOption[] = [
  { label: "Cajun" },
  { label: "Garlic Butter" },
  { label: "Lemon Pepper" },
  { label: "The OG Sauce" },
];

export const spiceLevels: MenuOption[] = [
  { label: "Mild" },
  { label: "Medium" },
  { label: "Hot" },
  { label: "Extra Hot" },
];

export const menuExtras: MenuOption[] = [
  { label: "Calamari", price: 15.99 },
  { label: "Shrimp Tempura", price: 15.99 },
  { label: "Lobster Sandwich", price: 17.99 },
  { label: "Garlic Bread", price: 6.99, detail: "3 pieces" },
  {
    label: "Fried Rice",
    price: 18.99,
    detail: "Seafood, chicken, or sausage",
  },
];

export const friedRiceChoices = ["Seafood", "Chicken", "Sausage"];

