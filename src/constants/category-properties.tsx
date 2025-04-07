import { ReactNode } from "react";
import { LocalImage } from "src/assets/local-image";

export interface SubCategory {
  name: string;
  id?: string;
}

export interface Category {
  name: string;
  id: string;
  icon: ReactNode;
  subcategories: SubCategory[];
  imageKey: string;
}

// Define image keys as an object instead of array for better referencing
const CATEGORY_IMAGES = {
  GAMING: "im_gaming",
  MUSIC: "im_music",
  ELECTRONICS: "im_electronic",
  TOYS: "im_toy",
  HOBBY: "im_hobby",
  BABY: "im_baby",
  HEALTH: "im_health",
  CLOTHING: "im_clothing",
  SPORTS: "im_sport",
  OFFICE: "im_office",
  FOOD: "im_food",
  LIFESTYLE: "im_lifestyle",
  GARDEN: "im_garden",
  PETS: "im_pet",
  CAR: "im_car",
} as const;

export const categories: Category[] = [
  {
    name: "Gaming",
    id: "gaming",
    imageKey: CATEGORY_IMAGES.GAMING,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.GAMING}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Video Games", id: "video-games" },
      { name: "Gaming Consoles", id: "gaming-consoles" },
      { name: "Gaming Accessories", id: "gaming-accessories" },
    ],
  },

  {
    name: "Music, Movies & TV",
    id: "entertainment",
    imageKey: CATEGORY_IMAGES.MUSIC,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.MUSIC}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Music", id: "music" },
      { name: "Movies & Series", id: "movies-series" },
    ],
  },

  {
    name: "Electronics",
    id: "electronics",
    imageKey: CATEGORY_IMAGES.ELECTRONICS,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.ELECTRONICS}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Computers & Accessories", id: "computers-accessories" },
      { name: "Audio & Video", id: "audio-video" },
      { name: "Cameras & Photography", id: "cameras-photography" },
      { name: "Phones & Accessories", id: "phones" },
      { name: "Tablets", id: "tablets" },
      { name: "Home Appliances", id: "appliances" },
      { name: "Kitchen Electronics", id: "kitchen-electronics" },
      { name: "Smart Home", id: "smart-home" },
      { name: "Personal Care Electronics", id: "personal-care-electronics" },
    ],
  },

  {
    name: "Toys & Games",
    id: "toys",
    imageKey: CATEGORY_IMAGES.TOYS,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.TOYS}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Indoor Toys", id: "indoor-toys" },
      { name: "Outdoor Toys", id: "outdoor-toys" },
    ],
  },

  {
    name: "Hobby & Party",
    id: "hobby",
    imageKey: CATEGORY_IMAGES.HOBBY,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.HOBBY}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Hobbies & Crafts", id: "hobbies-crafts" },
      { name: "Party Supplies & Costumes", id: "party-costumes" },
    ],
  },

  {
    name: "Baby & Child",
    id: "baby",
    imageKey: CATEGORY_IMAGES.BABY,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.BABY}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Baby & Children's Fashion", id: "baby-fashion" },
      { name: "Nursery & Sleep", id: "nursery-sleep" },
      { name: "Travel & Transport", id: "baby-travel" },
      { name: "Baby Safety", id: "baby-safety" },
      { name: "Baby Care", id: "baby-care" },
      { name: "Baby Food", id: "baby-food" },
      { name: "Baby Toys", id: "baby-toys" },
    ],
  },

  {
    name: "Health & Beauty",
    id: "health",
    imageKey: CATEGORY_IMAGES.HEALTH,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.HEALTH}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Perfume & Fragrances", id: "perfume" },
      { name: "Personal Care", id: "personal-care" },
      { name: "Cosmetics & Skincare", id: "cosmetics-skincare" },
      { name: "Gift Sets", id: "beauty-gift-sets" },
      { name: "Adult Products", id: "adult-products" },
    ],
  },
  {
    name: "Sports & Outdoors",
    id: "sports",
    imageKey: CATEGORY_IMAGES.SPORTS,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.SPORTS}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Sportswear", id: "sportswear" },
      { name: "Sports Equipment", id: "sports-equipment" },
      { name: "Outdoor Recreation", id: "outdoor-recreation" },
      { name: "Travel Gear", id: "travel-gear" },
      { name: "Bicycles & Accessories", id: "bicycles" },
    ],
  },

  {
    name: "Office & School",
    id: "office",
    imageKey: CATEGORY_IMAGES.OFFICE,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.OFFICE}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Office Supplies", id: "office-supplies" },
      { name: "School Supplies", id: "school-supplies" },
      { name: "Planners & Calendars", id: "planners-calendars" },
      { name: "Journals & Memory Books", id: "journals-memory-books" },
      { name: "Greeting Cards", id: "greeting-cards" },
      { name: "Magazines & Puzzle Books", id: "magazines-puzzle-books" },
      { name: "Photo Albums", id: "photo-albums" },
      { name: "Gift Wrapping", id: "gift-wrapping" },
    ],
  },

  {
    name: "Food & Drink",
    id: "food",
    imageKey: CATEGORY_IMAGES.FOOD,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.FOOD}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Breakfast & Snacks", id: "breakfast-snacks" },
      { name: "Condiments & Toppings", id: "condiments" },
      { name: "Soups & Preserves", id: "soups-preserves" },
      { name: "Sauces & Dressings", id: "sauces" },
      { name: "Pasta & Rice", id: "pasta-rice" },
      { name: "Sweets & Cookies", id: "sweets-cookies" },
      { name: "Coffee & Tea", id: "coffee-tea" },
      { name: "Beverages", id: "beverages" },
      { name: "Sweeteners", id: "sweeteners" },
    ],
  },

  {
    name: "Home & Kitchen",
    id: "home",
    imageKey: CATEGORY_IMAGES.LIFESTYLE,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.LIFESTYLE}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Home Decor", id: "home-decor" },
      { name: "Home Storage", id: "home-storage" },
      { name: "Window Treatments & Textiles", id: "window-textiles" },
      { name: "Furniture", id: "furniture" },
      { name: "Kitchen Appliances", id: "kitchen-appliances" },
      { name: "Cookware & Dining", id: "cookware-dining" },
      { name: "Smart Home Devices", id: "smart-home-devices" },
    ],
  },

  {
    name: "Garden & DIY",
    id: "garden",
    imageKey: CATEGORY_IMAGES.GARDEN,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.GARDEN}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "DIY Tools", id: "diy-tools" },
      { name: "Sustainable Living", id: "sustainable-living" },
      { name: "Home Security", id: "home-security" },
      { name: "Kitchen Improvements", id: "kitchen-improvements" },
      { name: "Bathroom & Cleaning", id: "bathroom-cleaning" },
      { name: "Plants & Gardening", id: "plants-gardening" },
      { name: "Garden Furniture & Decor", id: "garden-furniture" },
      { name: "Garden Tools & Equipment", id: "garden-tools" },
    ],
  },

  {
    name: "Pets",
    id: "pets",
    imageKey: CATEGORY_IMAGES.PETS,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.PETS}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Cat Supplies", id: "cat-supplies" },
      { name: "Dog Supplies", id: "dog-supplies" },
      { name: "Fish & Aquarium", id: "fish-aquarium" },
    ],
  },

  {
    name: "Automotive",
    id: "automotive",
    imageKey: CATEGORY_IMAGES.CAR,
    icon: (
      <LocalImage
        name={CATEGORY_IMAGES.CAR}
        width={40}
        height={40}
      />
    ),
    subcategories: [
      { name: "Car Maintenance", id: "car-maintenance" },
      { name: "Car Parts & Accessories", id: "car-parts" },
      { name: "Motorcycle Gear", id: "motorcycle-gear" },
      { name: "Scooters & Accessories", id: "scooters" },
    ],
  },
];
