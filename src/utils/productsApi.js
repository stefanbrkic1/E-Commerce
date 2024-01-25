export default async function fetchProducts() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('ServiceError');
    }
    const data = await response.json();

    const filteredData = data.filter((product) => {
      if (
        product.description !== 'Test Product Description' &&
        product.description !== 'A description' &&
        product.description !== 'dsgasdgarfhgahgsdh' &&
        product.title !== 'SQDQSD' &&
        product.title !== 'tshirt'
      ) {
        return product;
      }
    });
    return filteredData;
  } catch (error) {
    console.error(error);
  }
}
