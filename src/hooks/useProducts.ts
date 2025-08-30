import { useQuery } from "@tanstack/react-query";
import type { Category } from "../entities/Category";
import getProductByCategory from "../services/product-service";

const useProducts = (category: string) => {
  return useQuery<Category[]>({
    queryKey: ["products", category],
    queryFn: () => getProductByCategory(category),
  });
};

export default useProducts;
