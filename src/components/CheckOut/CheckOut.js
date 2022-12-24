import { Link } from "@reach/router";

import useShop from "./ShopContext";
import ProductCard from "./ProductCard";
import {
  ProductsWrapper,
  Title,
  LinksWrapper,
  Wrapper
} from "./CheckOut.styled";

export const CheckOut = () => {
  const { products, total, quantity } = useShop();

  return (
    <>
      <Title>Checking out</Title>
      <p>({quantity}) Item/s in cart</p>
      <p>Price total: ${total}</p>

      <LinksWrapper>
        <Link to="/finishpurchase">DONE</Link>
      </LinksWrapper>

      <Wrapper>
        <ProductsWrapper>
          {products.map((product, index) => (
            <ProductCard {...product} key={index} />
          ))}
        </ProductsWrapper>
      </Wrapper>
    </>
  );
};
