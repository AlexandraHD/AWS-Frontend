'use strict';

products = [
  {
    productId: 1,
    productName: 'Book',
    price: 123,
  },
  {
    productId: 2,
    productName: 'Pen',
    price: 13,
  },
  {
    productId: 3,
    productName: 'Notebook',
    price: 23,
  }
]
module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };
}
module.exports.getProductsById = async (event) => {
  const { id } = event.pathParameters;
  const product = products.find((p) => p.productId === parseInt(productId));
  return {
    statusCode: 200,
    body: JSON.stringify(product)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
