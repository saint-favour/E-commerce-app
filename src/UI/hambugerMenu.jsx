import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import brandLogo from "../assets/logo.svg";

// import x from "../assets/icon-close.svg";
import CartList from "./cartButton";
import { useState } from "react";

export default function Menu() {
  const [show, setShow] = useState(false);
  return (
    <MenuStyle>
      <div>
        <TiThMenu onClick={() => setShow(!show)} className="ham" />
        {!show ? null : (
          <Slide>
              <ul className="nav-link">
                <a href="#">
                  <li>Collections</li>
                </a>
                <a href="#">
                  <li>Men</li>
                </a>
                <a href="#">
                  <li>Women</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>
          </Slide>
        )}
        <img src={brandLogo} alt="logo" className="brand" />
      </div>
      <div className="cart">
        <CartList />
      </div>
    </MenuStyle>
  );
}

const MenuStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Kumbh Sans;
  position: relative;
  padding: 1rem;
  padding-inline: 1rem;

  .ham {
    position: relative;
    z-index: 6;
    cursor: pointer;
  }

  .brand {
    margin-left: 1rem;
  }

  .cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 945px) {
    display: none;
  }
`;

const Slide = styled.nav`
  position: absolute;
  top: 0;
  left: -5px;
  width: 16rem;
  height: 150dvh;
  background-color: white;
  z-index: 3;

  ul {
    padding: 0;
    margin-top: 5rem;
    list-style-type: none;
  }

  li {
    padding: 1.5rem 1rem 0;
  }

  li:hover {
    text-decoration: 2px underline #ff7d1b;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;
