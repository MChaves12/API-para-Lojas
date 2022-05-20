require('dotenv').config();
// async errors

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const RotaDeProdutos = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());

//routes

app.get('/', (request, response) => {
  response.send(
    '<h1> API para Lojas </h1> <a href="/api/v1/products"> Produtos </a>'
  );
});

app.use('/api/v1/products', RotaDeProdutos);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Servidor na porta ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
