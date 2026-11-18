import type { StaticImageData } from "next/image"
import whiteWardrobe from "../../public/images/cabinets-1.jpg"
import walkInMirror from "../../public/images/custome-room.jpg"
import walkInOpen from "../../public/images/walk-in-cabinets.jpg"
import slidingGreige from "../../public/images/slider-cabinets.jpg"
import tvUnit from "../../public/images/living-room-cabinets.jpg"
import slidingOpen from "../../public/images/ad88a5e7-2841-4ebc-9dfe-7d3eeb821709.jpg"
import slidingShelves from "../../public/images/9be4cff9-8432-4b45-9b57-4b89945cb74a.jpg"
import studyNook from "../../public/images/b7cb5c91-8248-45bf-b3fc-3ae1fa99b6e0.jpg"
import walkInDoors from "../../public/images/10683bac-28c8-492d-8db5-38e10cdab72f.jpg"
import oakCabinet from "../../public/images/custom-cabinets.jpg"
import bathroom from "../../public/images/bathoom-tile.jpg"
import ceiling from "../../public/images/Cieling.jpg"
import cornerWardrobe from "../../public/images/132f9f3e-7448-4fd3-9de8-f82b1e65c1c7.jpg"
import shelvingWall from "../../public/images/04b629aa-fe5f-4021-b756-44e3a161f404.jpg"

export const business = {
  name: "Mbalagani Interiors & Renovations",
  shortName: "Mbalagani",
  phone: "079 188 7495",
  phoneHref: "tel:+27791887495",
  email: "Mbalagani2@gmail.com",
  // TODO: add the suburb and town to the street address.
  address: "3949 Maripani Street",
  mapsUrl: "https://maps.app.goo.gl/3949maripani",
} as const

export type Finish = {
  id: "white" | "greige" | "wood"
  name: string
  swatch: string
  image: StaticImageData
  alt: string
  project: string
  note: string
}

export const finishes: Finish[] = [
  {
    id: "white",
    name: "White",
    swatch: "#F4F2EE",
    image: whiteWardrobe,
    alt: "White wall-to-wall wardrobe with a TV niche and drawers",
    project: "Bedroom wardrobe with TV niche",
    note: "Bright and timeless",
  },
  {
    id: "greige",
    name: "Greige",
    swatch: "#A79C8F",
    image: slidingGreige,
    alt: "Three-door greige sliding wardrobe with a downlight",
    project: "Three-door sliding wardrobe",
    note: "Soft and modern",
  },
  {
    id: "wood",
    name: "Woodgrain",
    swatch: "#B9A68E",
    image: oakCabinet,
    alt: "Light woodgrain tall cabinet with a base unit",
    project: "Tall cabinet and base unit",
    note: "Warm and natural",
  },
]

// Figures from the previous website. Keep them up to date.
export const stats = [
  { value: "30+", label: "Projects completed" },
  { value: "5+ years", label: "Experience" },
  { value: "5 years", label: "Warranty on all work" },
  { value: "5.0", label: "Customer rating" },
]

export const services = [
  { title: "Custom wardrobes and walk-ins", body: "Bespoke wardrobes designed to make the most of your storage space.", image: walkInOpen },
  { title: "Kitchen cabinets", body: "Modern kitchen cabinet design and installation.", image: oakCabinet },
  { title: "TV units and built-ins", body: "Floating TV units, study nooks and shelving walls.", image: tvUnit },
  { title: "Ceiling installation", body: "Suspended and decorative ceilings.", image: ceiling },
  { title: "Floor and bathroom tiles", body: "Tile installation for kitchens, bathrooms and living spaces.", image: bathroom },
]

export const serviceOptions = [
  "Custom wardrobe or walk-in closet",
  "Kitchen cabinets",
  "TV unit or built-in",
  "Ceiling installation",
  "Floor or bathroom tiles",
  "Complete renovation",
]

export const gallery = [
  { image: walkInMirror, alt: "Walk-in closet with a mirror and drawers", label: "Walk-in closet" },
  { image: slidingOpen, alt: "Greige sliding wardrobe with open centre shelves", label: "Sliding wardrobe" },
  { image: studyNook, alt: "Built-in study desk and shelf", label: "Study nook" },
  { image: cornerWardrobe, alt: "Corner sliding wardrobe", label: "Corner wardrobe" },
  { image: walkInDoors, alt: "Greige walk-in closet with downlights", label: "Walk-in closet" },
  { image: slidingShelves, alt: "Sliding wardrobe with side shelves", label: "Bedroom wardrobe" },
  { image: shelvingWall, alt: "White shelving wall during installation", label: "Shelving wall" },
  { image: bathroom, alt: "Fully tiled bathroom with a bath", label: "Bathroom tiling" },
]

export const promises = [
  { title: "Free consultation", body: "We measure up and quote at no cost." },
  { title: "5-year warranty", body: "On all of our work." },
  { title: "Flexible financing", body: "Payment options to suit your budget." },
  { title: "Clean and professional", body: "We leave your home as tidy as we found it." },
]
