
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3001;

app.get('/api/products', async (req, res) => {
  const response = await fetch('https://mockend.up.railway.app/api/products');
  const products = await response.json();

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});