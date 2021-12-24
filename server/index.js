const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const products = [
  {
    id: "C1056706",
    name: "NASA T-shirt",
    brand: "American Eagle",
    department: "Clothing",
    description: "Blue, graphic t-shirt with NASA logo.",
    price: 24.99,
  },
  {
    id: "C1007312",
    name: "Christmas Sweater",
    brand: "Hanes",
    department: "Clothing",
    description: "Red christmas sweater.",
    price: 45.0,
  },
  {
    id: "A0082231",
    name: "Clubmaster Sunglasses",
    brand: "Ray Ban",
    department: "Accessories",
    description: "Polarized sunglasses. 54mm.",
    price: 165.0,
  },
  {
    id: "T2203421",
    name: "iPhone Lightning Cable",
    brand: "Anker",
    department: "Technology",
    description: "6 ft black/red braided lightning cable.",
    price: 22.0,
  },
  {
    id: "T2902231",
    name: "HDMI Cable",
    brand: "Anker",
    department: "Technology",
    description: "10 ft HDMI cable. 4K.",
    price: 8.0,
  },
];

// Returns all products
app.get("/products", (req, res) => {
  res.json(products);
});

// This returns all products with the id = :id
app.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const _products = products.filter((p) => p.id === id);
  res.json(_products);
});

// This returns all products with the department = :department
app.get("/products/department/:department", (req, res) => {
  const { department } = req.params;
  const _products = products.filter((p) => p.department === department);
  res.json(_products);
});

app.get("/products/name/:name", (req, res) => {
  const { name } = req.params;
  const _products = products.filter((p) => p.name === name);
  res.json(_products);
});

// Add a new product object to products list from req.body
app.post("/products", (req, res) => {
  const { id, name, brand, department, description, price } = req.body;
  if (products.some((p) => p.id === id)) {
    res.status(403).json({ error: `Product with id ${id} already exists.` });
  }
  products.push({ id, name, brand, department, description, price });
  res.status(200).json({ id, name, brand, department, description, price });
});

// Update an existing product with id = :id to the data in req.body
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, brand, department, description, price } = req.body;
  products.forEach((p) => {
    if (p.id === id) {
      p = {
        id,
        name,
        brand,
        department,
        description,
        price,
      };
    }
  });
});

// Deletes an existing product by :id
app.delete("products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id !== id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
