import {useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import profilePic from "../assets/image-avatar.png";
import styled from "styled-components";


export default function CartList() {
  const [show, setShow] = useState(false);
  return (
    <>
      <CartDesign>
        <div className="product-count">0</div>
        <MdOutlineShoppingCart
          className="cart"
          onClick={() => setShow(!show)}
        />
        <img src={profilePic} alt="profile-pic" className="profile" />

        {!show ? null : (
          <CartListStyle>
            <p>Cart</p>
            <hr />
            <p className="empty-text">Your cart is empty</p>
          </CartListStyle>
        )}
      </CartDesign>
    </>
  );
}

const CartDesign = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
  position: relative;

  .cart {
    cursor: pointer;
    position: relative;
  }

  .product-count {
    position: absolute;
    background-color: #ff7d1b;
    border-radius: 70%;
    width: 9px;
    height: 11px;
    font-size: 11px;
    text-align: center;
    color: white;
    position: absolute;
    right: 3.5rem;
    top: 0.2px;
  }

  .profile:hover {
    cursor: pointer;
    outline: 0.1px solid #ff7d1b;
    border-radius: 50%;
  }
`;


const CartListStyle = styled.div`
  position: absolute;
  top: 3.2rem;
  right: 5%;
  transform: translate(-5%);
  width: 15rem;
  height: 10rem;
  border: none;
  background-color: white;
  box-shadow: -1px 2px 15px #ddd6d6;

  p {
    font-weight: bolder;
    margin: 0;
    padding: 5px 6px 6px;
  }

 

  .empty-text {
    text-align: center;
    vertical-align: text-bottom;
    font-weight: lighter;
    font-size: small;
    color: #777779;
  }

  hr {
    opacity: 20%;
  }

  @media (max-width: 600px) {
    position: absolute;
    top: 3.2rem;
    right: -30%;
    transform: translate(-5%);
    width: 20rem;
    height: 10rem;
    border: none;
    background-color: white;
    box-shadow: -1px 2px 15px #ddd6d6;
  }
`;




