export const Products = [
  {
    title: "Rosaline Cake ",
    description:
      "A coconut infused cake with a moist three layer ganache with cream toppings",
    imageUrl: "/images/cake1.jpg",
    prices: {
      small: 150,
      medium: 200,
      large: 250,
    },
  },
  {
    title: "Chocolate Cake ",
    description:
      "A chocolate infused cake with a moist three layer ganache with cream toppings",
    imageUrl: "/images/cake2.jpg",
    prices: {
      small: 150,
      medium: 200,
      large: 250,
    },
  },
  {
    title: "Vanilla Berry Bliss",
    description:
      "A light vanilla sponge layered with fresh cream and  topped with white chocolate flakes.",
    imageUrl: "/images/cake3.jpg",
    prices: {
      small: 140,
      medium: 190,
      large: 240,
    },
  },
];

export const AllProducts = {
  cake: {
    title: "Custom Cake",
    description: "Order a cake by selecting size and flavour",
    sizes: {
      Bento: {
        vanilla: "Rs 590",
        almond: "Rs 690",
        lemon: "Rs 790",
         chocolate: "Rs 790",
      },
      Classic: {
        vanilla: "Rs 1800",
        almond: "Rs 2000",
        lemon: "Rs 2000",
         chocolate: "Rs 2000"
      },
      Deluxe: {
         vanilla: "Rs 2200",
        almond: "Rs 2500",
        lemon: "Rs 2500",
         chocolate: "Rs 2500"
      }
    }
  },
  cakesicles: {
    title: "Cakesicles",
    description: "Decorated cake popsicles in assorted flavours",
    sizes: {
      "6": "Rs 500",
      "10": "Rs 800",
      "15": "Rs 1125"
    }
  },
  strawberryDipped: {
    title:"Strawberry Dipped",
    description: "Fresh strawberries dipped in premium chocolate",
    sizes: {
      "5": "Rs 450",
      "12": "Rs 1100",
      "15": "Rs 1300",
      "20": "Rs 1650",
      "25": "Rs 2100",
      "30": "Rs 2500"
    }
  }
};


export const Reviews = [
  {
    name: "Jane Doe",
    comment: "The cake was fresh, moist, and absolutely perfect!",
    image: "/images/portrait1.jpg",
    product: "Rosaline Cake",
  },
  {
    name: "John Smith",
    comment: "Beautifully decorated and tasted just as amazing too.",
    image: "/images/portrait2.jpg",
    product: "Signature Cake",
  },
  {
    name: "Raj Patel",
    comment: "Highly recommend for birthdays, parties, or any occasion!",
    image: "/images/portrait4.jpg",
    product: "Chocolate Cake",
  },
];

export const images = [
  { src: "/images/cake1.jpg" },
  { src: "/images/cake2.jpg" },
  { src: "/images/cake3.jpg" },
];
