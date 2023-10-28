import React from "react";
import ProductData from "../../components/sections/ProductHouse";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
function Products() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ProductData />
      </QueryClientProvider>
    </div>
  );
}

export default Products;
