const express = require('express');
const app = express();
const productsRouter = require('./routes/products.routes');
const errorHandler = require('./middlewares/errorHandler');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/products', productsRouter); // Asegúrate que productsRouter es una función middleware válida

// Error handling
app.use(errorHandler);

module.exports = app;