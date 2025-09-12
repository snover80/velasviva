import products from "../data/products";
import type { ProductPerCategory } from "../entities/ProductPerCategory";

const getProductByCategory = (category: string): Promise<ProductPerCategory[]> => {
  if (category === null || category === undefined || category === "")
    return Promise.resolve(
      products.map(product => ({
        ...product,
        alternatePrice: product.alternatePrice === null ? 0 : product.alternatePrice
      }))
    );
  return Promise.resolve(
    products
      .filter((product) => product.categoryName === category)
      .map(product => ({
        ...product,
        alternatePrice: product.alternatePrice === null ? 0 : product.alternatePrice
      }))
  );
};

export default getProductByCategory;
