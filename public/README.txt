Drop these image files here with the exact names below and they'll be picked up automatically.
All of them fail gracefully if missing (hero falls back to an animated gradient, gallery tiles
fall back to a small icon + caption), so nothing breaks in the meantime.

- logo.png                     -> circular Lobster Factory logo (header)
- hero-boil.jpg                 -> full-width photo behind the homepage hero (the flat-lay boil photo)
- og-image.png (1200x630)       -> social share preview image (Open Graph / Twitter)

Gallery photos (src/components/gallery.tsx) — mapped to the photos you shared:
- gallery/lobster-boil.jpg       -> whole boiled lobster on newspaper
- gallery/king-crab.jpg          -> king crab legs on wood board with butter
- gallery/dungeness-crab.jpg     -> dungeness crab with cracked pepper sauce
- gallery/loaded-boil.jpg        -> corn, potato, sausage & onion close-up
- gallery/garlic-butter-shrimp.jpg -> shell-on shrimp scampi in a pot
- gallery/mussels.jpg            -> mussels in sauce, pan shot
- gallery/clams-mussels.jpg      -> mixed clam & mussel boil plate
- gallery/lobster-mac.jpg        -> baked lobster mac & cheese
- gallery/shrimp-basket.jpg      -> fried/tempura shrimp basket

No "Cajun House Special" tile — skipped since there's no photo for it yet.

