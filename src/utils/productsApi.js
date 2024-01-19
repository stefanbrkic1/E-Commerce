export default async function fetchProducts() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('ServiceError');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
