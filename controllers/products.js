const getAllProductsStatic = async (request, response) => {
  response.status(200).json({ msg: 'Rota teste' });
};

const getAllProducts = async (request, response) => {
  response.status(200).json({ msg: 'Rota de Produtos' });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
