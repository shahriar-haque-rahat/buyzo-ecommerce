export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
  longDescription: string;
  inStock: boolean;
  image: string;
  isOnSale: boolean;
  category: string;
  isFeatured?: boolean;
  brand: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wooden container Bowl",
    price: 96.0,
    originalPrice: 120.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: [
      "/wooden-container-bowl-main.png",
      "/wooden-container-bowl-angle1.png",
      "/wooden-container-bowl-angle2.png",
      "/wooden-container-bowl-detail.png",
    ],
    sizes: ["Small", "Medium", "Large"],
    colors: ["Natural", "Dark Brown", "Light Oak"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/wooden-container-bowl-modern.png",
    isOnSale: true,
    category: "decoration",
    brand: "Comfique",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Evitra Rocking Chair",
    price: 90.0,
    originalPrice: 110.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/modern-rocking-chair-design.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/modern-rocking-chair-design.png",
    isOnSale: true,
    category: "furniture",
    brand: "Decorae",
  },
  {
    id: 3,
    name: "Set of 2 baskets",
    price: 230.0,
    originalPrice: 260.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/woven-baskets-set-modern-home.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/woven-baskets-set-modern-home.png",
    isOnSale: true,
    category: "decoration",
    brand: "Prestora",
  },
  {
    id: 4,
    name: "Tailored Fit Mesh Panel",
    price: 67.0,
    originalPrice: 90.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/mesh-panel-modern-design.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/mesh-panel-modern-design.png",
    isOnSale: true,
    category: "decoration",
    brand: "Bloomora",
  },
  {
    id: 5,
    name: "Canvas Basket Modern",
    price: 400.0,
    originalPrice: 450.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/canvas-basket-modern-design.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/canvas-basket-modern-design.png",
    isOnSale: true,
    category: "decoration",
    brand: "Decorae",
  },
  {
    id: 6,
    name: "Bottle With Wooden Cork",
    price: 270.0,
    originalPrice: 300.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/bottle-wooden-cork-modern-design.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/bottle-wooden-cork-modern-design.png",
    isOnSale: true,
    category: "decoration",
    brand: "Decorae",
  },
  {
    id: 7,
    name: "Hauteville Plywood Chair",
    price: 320.0,
    originalPrice: 395.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/plywood-chair-hauteville-modern.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/plywood-chair-hauteville-modern.png",
    isOnSale: true,
    category: "furniture",
    brand: "Prestora",
  },
  {
    id: 8,
    name: "Juicy Pendant Lamp",
    price: 350.0,
    originalPrice: 380.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/pendant-lamp-modern-juicy.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/pendant-lamp-modern-juicy.png",
    isOnSale: true,
    category: "lighting",
    brand: "Bloomora",
  },
  {
    id: 9,
    name: "Big sole canvas basket",
    price: 480.0,
    originalPrice: 520.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/canvas-basket-large-modern.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/canvas-basket-large-modern.png",
    isOnSale: true,
    category: "decoration",
    brand: "Comfique",
  },
  {
    id: 10,
    name: "Evitra Rocking Chair",
    price: 450.0,
    originalPrice: 500.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/modern-rocking-chair-design.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/modern-rocking-chair-design.png",
    isOnSale: true,
    category: "furniture",
    brand: "Prestora",
  },
  {
    id: 11,
    name: "Rosmo Naming",
    price: 180.0,
    originalPrice: 200.0,
    rating: 4,
    reviewCount: 2,
    description:
      "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.",
    images: ["/modern-naming-design-product.png"],
    sizes: ["One Size"],
    colors: ["Default"],
    features: [
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
      "Claritas est etiam processus dynamicus.",
      "Qui sequitur mutationem consuetudium lectorum.",
    ],
    longDescription:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    inStock: true,
    image: "/modern-naming-design-product.png",
    isOnSale: true,
    category: "decoration",
    brand: "Comfique",
  },
];