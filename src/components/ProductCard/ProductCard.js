import { useState, useEffect } from "react";
import useShop from "./ShopContext";
import {
  Title,
  Wrapper,
  Context,
  Subtitle,
  TextContainer,
  AddButton
} from "./ProductCard.styled";

export const ProductCard = ({ name, imageUrl, price, author }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.name === name);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, imageUrl, price, author };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <Wrapper background={imageUrl}>
      <TextContainer>
        <Title>{name}</Title>
        <Context>by: {author}</Context>
        <Subtitle>${price}</Subtitle>
      </TextContainer>
      <AddButton onClick={handleClick} isInCart={isInCart}>
        <p>{isInCart ? "-" : "+"}</p>
      </AddButton>
    </Wrapper>
  );
};
