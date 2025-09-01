import products from "../data/Products";
import type { Category } from "../entities/Category";

const getProductByCategory = (category: string): Promise<Category[]> => {
  if (category === null || category === undefined || category === "")
    return Promise.resolve(products);
  return Promise.resolve(
    products.filter((product) => product.categoryName === category)
  );
};

export default getProductByCategory;
