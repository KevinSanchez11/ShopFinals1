import { shopData } from "./ShopData";
import ProductCard from "./ProductCard";

import { Title, ProductsWrapper } from "./Products.styled";

export const Products = () => {
  return (
    <>
      <Title>Item List</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};
