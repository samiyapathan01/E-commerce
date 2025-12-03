const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1505739718967-6df30ff369c7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    category: "Electronics",
    stock: 35,
    brand: "SoundWave",
    rating: 4.5,
    desc: "High-quality wireless Bluetooth headphones.",
    specs: {
      color: "Black",
      batteryLife: "20 hours",
      connectivity: "Bluetooth 5.0",
      warranty: "1 year",
    },
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 3999,
    image:
      "https://images.unsplash.com/photo-1745256375848-1d599594635d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
    category: "Wearables",
    stock: 50,
    brand: "FitTrack",
    rating: 4.7,
    desc: "Stylish fitness tracker with heart rate monitor.",
    specs: {
      color: "Silver",
      display: "1.5-inch AMOLED",
      batteryLife: "10 days",
      waterResistant: "Yes",
    },
  },
];

router.get("/products", (req, res) => {
  res.json(products);
});

router.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

module.exports = router;
