import { ALL_PRODUCTS } from '../constant/data';

const searchProduct = (query: string): Promise<string[]> => {
  return new Promise((resolve) => {
    const matchingProduct = ALL_PRODUCTS.filter(({ name }) => name.includes(query.toLowerCase())).map(
      ({ name }) => name
    );
    //
    setTimeout(() => {
      resolve(matchingProduct);
    }, 500);
  });
};

export default searchProduct;
