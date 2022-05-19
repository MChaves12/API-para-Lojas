require('dotenv').config();
// async errors

const express = require('express');
const app = express();

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

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Servidor na porta ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
