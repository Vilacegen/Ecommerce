import bcrypt from "bcryptjs";
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Nike Black Airforce",
    slug: "nike-slim-shirt",
    category: "Shoes",
    image: "../images/N9.jpeg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 23,
    description: "high quality shirt",
  },
  {
    name: "Nike Black Sweat jacket",
    slug: "Nike Black Sweat jacket",
    category: "Jackets",
    image: "../images/N2.jpeg",
    price: 100,
    countInStock: 20,
    brand: "Nike",
    rating: 4.0,
    numReviews: 12,
    description: "high quality product",
  },
  {
    name: "Nike Gray Sports Pants",
    slug: "Nike Gray Sports Pants",
    category: "Pants",
    image: "../images/N12.jpeg",
    price: 220,
    countInStock: 10,
    brand: "Nike",
    rating: 4.8,
    numReviews: 18,
    description: "high quality product",
  },
  {
    name: "Adidas White Sports Shirt",
    slug: "Adidas White Sports Shirt",
    category: "Shirt",
    image: "../images/A4.jpeg",
    price: 78,
    countInStock: 0,
    brand: "Adidas",
    rating: 4.5,
    numReviews: 22,
    description: "high quality product",
  },
  {
    name: "Nike Black Airforce",
    slug: "Nike Black Airforce",
    category: "Shoes",
    image: "../images/N9.jpeg",
    price: 120,
    countInStock: 10,
    brand: "Nike",
    rating: 4.5,
    numReviews: 23,
    description: "high quality shoes",
  },
  {
    name: "Nike Black Sweat jacket",
    slug: "Nike Black Sweat jacket",
    category: "Jackets",
    image: "../images/N2.jpeg",
    price: 100,
    countInStock: 20,
    brand: "Nike",
    rating: 4.0,
    numReviews: 12,
    description: "high quality sweat jacket",
  },
  {
    name: "Nike Gray Sports Pants",
    slug: "Nike Gray Sports Pants",
    category: "Pants",
    image: "../images/N12.jpeg",
    price: 220,
    countInStock: 10,
    brand: "Nike",
    rating: 4.8,
    numReviews: 18,
    description: "Breathable sports free pants",
  },
  {
    name: "Adidas White Sports Shirt",
    slug: "Adidas White Sports Shirt",
    category: "Shirt",
    image: "../images/A4.jpeg",
    price: 78,
    countInStock: 0,
    brand: "Adidas",
    rating: 4.5,
    numReviews: 22,
    description: "Summer weather white loose shirt",
  },

  {
    name: "Air Force 1",
    slug: "Air Force 1",
    category: "Shoes",
    image: "../images/G9.jpeg",
    price: 178,
    countInStock: 30,
    brand: "Nike",
    rating: 2.5,
    numReviews: 18,
    description: "Purple Butterfly Dreamland Custom size 42",
  },
  {
    name: "Air Jordan 4",
    slug: "Air Jordan 4",
    category: "Shoes",
    image: "../images/G10.jpeg",
    price: 469,
    countInStock: 40,
    brand: "Nike",
    rating: 4.5,
    numReviews: 22,
    description: "WNBA'S Exclusive Jordans Size 44",
  },
  {
    name: "Nike Air Jordan 4",
    slug: "Nike Air Jordan 4",
    category: "Shoes",
    image: "../images/G11.jpeg",
    price: 124,
    countInStock: 70,
    brand: "Nike",
    rating: 4.5,
    numReviews: 22,
    description: "White Thunder size 43",
  },
  {
    name: "Loafers",
    slug: "Loafers",
    category: "Shoes",
    image: "../images/G12.jpeg",
    price: 113,
    countInStock: 40,
    brand: "Whitneys",
    rating: 4.5,
    numReviews: 22,
    description: "Bass weejuns Whitney Super Lug Loafers",
  },
  {
    name: "Bandeu Dress",
    slug: "Bandeu Dress",
    category: "Dress",
    image: "../images/G1.jpeg",
    price: 1128,
    countInStock: 90,
    brand: "Alma",
    rating: 4.5,
    numReviews: 22,
    description: "Irregular Mini dress in black",
  },
  {
    name: "Maxi Dress",
    slug: "Maxi Dress",
    category: "Dress",
    image: "../images/G2.jpeg",
    price: 1278,
    countInStock: 40,
    brand: "Maxi",
    rating: 4.5,
    numReviews: 22,
    description: "Cut out bandage maxi dress in black",
  },
  {
    name: "Bell Dress",
    slug: "Bell Dress",
    category: "Dress",
    image: "../images/G3.jpeg",
    price: 1348,
    countInStock: 50,
    brand: "Bell",
    rating: 4.5,
    numReviews: 22,
    description: "Haute edition women's bell sleeves cocktail party dress",
  },
  {
    name: "Dress",
    slug: "Dress",
    category: "Dress",
    image: "../images/G4.jpeg",
    price: 78,
    countInStock: 10,
    brand: "Alma",
    rating: 4.5,
    numReviews: 22,
    description: "Strapless pleated dress in black",
  },
  {
    name: "Chamarra de bombardero con cremallera",
    slug: "Chamarra de bombardero con cremallera",
    category: "Jackets",
    image: "../images/G5.jpeg",
    price: 578,
    countInStock: 26,
    brand: "Shein",
    rating: 4.5,
    numReviews: 22,
    description: "Chamarra de bombardero con cremallera",
  },
  {
    name: "Black-White In piece Jacket",
    slug: "Black-White In piece Jacket",
    category: "Jackets",
    image: "../images/G6.jpeg",
    price: 390,
    countInStock: 90,
    brand: "Alma",
    rating: 4.5,
    numReviews: 22,
    description:
      "Hombres Cazadora mezclilla algodón con bolsillo con solapa con cordón con capucha sin camiseta",
  },
  {
    name: "Leather Jacket",
    slug: "Leather Jacket",
    category: "Jackets",
    image: "../images/G7.jpeg",
    price: 250,
    countInStock: 40,
    brand: "Leather",
    rating: 4.5,
    numReviews: 22,
    description:
      "Spring Autumn Leather Jacket Men Stand Collar Slim Pu Leather Jacket Fashion Motorcycle Causal Coat Mens Moto Biker Leather Coat",
  },
  {
    name: "Lapel Jackets",
    slug: "Lapel Jackets",
    category: "Jackets",
    image: "../images/G8.jpeg",
    price: 370,
    countInStock: 0,
    brand: "Alma",
    rating: 4.5,
    numReviews: 22,
    description: "Square Lapel Jacket for Women",
  },
  {
    name: "Cider Pants",
    slug: "Cider Pants",
    category: "Trousers",
    image: "../images/G13.jpeg",
    price: 1200,
    countInStock: 0,
    brand: "Cali",
    rating: 4.5,
    numReviews: 22,
    description:
      "Cider Pants & Jumpsuits High Waisted Wide Leg Trousers In Brown Color Brown Size S",
  },
  {
    name: "Pleated Trousers",
    slug: "Pleated Trousers",
    category: "Trousers",
    image: "../images/G14.jpeg",
    price: 970,
    countInStock: 10,
    brand: "Cali",
    rating: 4.5,
    numReviews: 22,
    description: "Pleated double button trousers Coral white 42",
  },
  {
    name: "Pleateed Pants",
    slug: "Pleateed Pants",
    category: "Trousers",
    image: "../images/G15.jpeg",
    price: 460,
    countInStock: 5,
    brand: "Tuscany",
    rating: 4.5,
    numReviews: 22,
    description:
      "Tuscany Herringbone Wool Blend Double Pleated Trousers Grey 29",
  },
  {
    name: "Office Pants",
    slug: "Office Pants",
    category: "Trousers",
    image: "../images/G16.jpeg",
    price: 320,
    countInStock: 10,
    brand: "Vinny",
    rating: 4.5,
    numReviews: 22,
    description: "Vinny Office Pants 34W L Light grey",
  },
];

export const sampleUsers: User[] = [
  {
    name: "Luka",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("adminadmin"),
    isAdmin: true,
  },
  {
    name: "Solace",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];
