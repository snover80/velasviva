import products from "../data/products";

export interface Category {
  id: number;
  name: string;
  description: string[];
  price: number;
  image: string;
  categoryName: string;
}

const getProductByCategory = (category: string): Promise<Category[]> => {
  return Promise.resolve(
    products.filter((product) => product.categoryName === category)
  );
};

export default getProductByCategory;
