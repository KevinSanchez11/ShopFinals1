import styled from "styled-components";
import { Link } from "@reach/router";

import useShop from "./ShopContext";
import ProductCard from "./ProductCard";
import { ProductsWrapper, Title, LinksWrapper } from "./Cart.styled";

export const Cart = () => {
  const { products, quantity } = useShop();

  return (
    <>
      <Title>Your wishlist</Title>
      <p>Items added: {quantity}</p>
      <LinksWrapper>
        <Link to="/checkout">--Check Out--</Link>
      </LinksWrapper>

      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
