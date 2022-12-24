import { Router, Link } from "@reach/router";

import { Product } from "../../models";
import { LinksWrapper, Wrapper } from "./App.styled";

import { ShopProvider } from "./ShopContext";
import Products from "./Products";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import FinishPurchase from "./finishPurchase";

export const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Wishlist</Link>
        </LinksWrapper>
        <Router>
          <Products path="/" />
          <Cart path="/cart" />
          <CheckOut path="/checkout" />
          <FinishPurchase path="/finishpurchase" />
        </Router>
      </Wrapper>
    </ShopProvider>
  );
};
