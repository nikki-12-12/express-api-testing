const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Product = require('../../src/models/product.model');

describe('Product API Integration Tests', () => {
  beforeAll(async () => {
    // Conectar a la base de datos de prueba
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Limpiar y desconectar
    await Product.deleteMany({});
    await mongoose.disconnect();
  });

  describe('GET /api/products', () => {
    test('should fetch all products', async () => {
      // Preparar datos de prueba
      await Product.create([
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 }
      ]);

      const response = await request(app).get('/api/products');
      
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBe(2);
      expect(response.body[0]).toHaveProperty('name');
      expect(response.body[0]).toHaveProperty('price');
    });
  });

  // Más pruebas...
});