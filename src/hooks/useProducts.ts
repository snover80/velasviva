import { useQuery } from "@tanstack/react-query";
import getProductByCategory from "../services/product-service";
import type { ProductPerCategory } from "../entities/ProductPerCategory";

const useProducts = (category: string) => {
  return useQuery<ProductPerCategory[]>({
    queryKey: ["products", category],
    queryFn: () => getProductByCategory(category),
  });
};

export default useProducts;
