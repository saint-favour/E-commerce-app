import {useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import profilePic from "../assets/image-avatar.png";
import cartImage from "../assets/image-product-1-thumbnail.jpg";
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
            <p className="cart-header">Cart</p>
            <hr />
            {/* <p className="empty-text">Your cart is empty</p> */}
            <div className="cart-info">
              <img src={cartImage} alt="small-pic" className="cartImage" />
              <p className="cart-text">
                Fall Limited Edition Sneakers <br /> $125.00 x 3 <span>$375.00</span>
              </p>
            </div>
            <div className="cart-button">
            <button>checkout</button>
            </div>
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

  .profile {
    width: 2rem;
    aspect-ratio: 1;
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
  height: 11rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  box-shadow: -1px 2px 15px #ddd6d6;
  z-index: 3;

  .cart-header {
    font-size: smaller;
    font-weight: bolder;
    margin: 0;
    padding: 14px 6px 6px;
  }

  .empty-text {
    text-align: center;
    vertical-align: text-bottom;
    font-weight: lighter;
    font-size: small;
    color: #777779;
  }

  .cartImage {
    width: 3rem;
    aspect-ratio: 1;
    border-radius: 5px;
  }

  .cart-info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .cart-text {
    font-size: small;
    color: #777779;
  }

  span {
    color: black;
  }

  .cart-button{
    padding-top: 0.2rem;
    display: flex;
  }

  button {
    /* width: 17rem; */
    flex: 1;
    height: 2.7rem;
    margin-inline: 1.5rem;
    border-radius: 10px;
    border: none;
    background-color: #ff7d1b;
  }

  button:hover {
    background-color: #faa25f;
    transition: 1s ease-out;
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
    height: 12rem;
    border: none;
    background-color: white;
    box-shadow: -1px 2px 15px #ddd6d6;
  }
`;




