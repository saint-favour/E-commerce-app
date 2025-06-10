import styled from "styled-components";
import {
  mainPic1,
  mainPic2,
  mainPic3,
  mainPic4,
  minus,
  plus,
  smallerpic1,
  smallerpic2,
  smallerpic3,
  smallerpic4,
} from "./all-img";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";

export default function Main() {
  const items = [smallerpic1, smallerpic2, smallerpic3, smallerpic4];
  const main = [mainPic1, mainPic2, mainPic3, mainPic4];

  const [count, setCount] = useState(0);
  const [image, setImage] = useState(main[0]);
  const [currentIndex, setCurrentIndex] = useState(main[0]);

  function next() {
    const isFirstSide = currentIndex === main[0];
    const newImage = isFirstSide ? main.length - 1 : currentIndex - 1;
    setCurrentIndex(newImage);
    console.log(newImage);
  }

  function prev() {
    const isLastSide = currentIndex === main.length - 1;
    const newImage = isLastSide ? main[0] : currentIndex + 1;
    setCurrentIndex(newImage);
    console.log(newImage);
  }

  return (
    <Mainstyle>
      <div>
        <img src={image} alt="sneaker-one" className="product-1" />

        <div className="slider-container">
          <div className="right-arrow" onClick={next}>
            ›
          </div>
          <div className="left-arrow" onClick={prev}>
            ‹
          </div>
          <img
            src={main[currentIndex]}
            alt="slider-img"
            className="product-2"
          />
        </div>

        <div className="small-pic">
          <img
            src={items[0]}
            alt="sneaker-one"
            className="size"
            onClick={() => setImage(main[0])}
          />
          <img
            src={items[1]}
            alt="sneaker-one"
            className="size"
            onClick={() => setImage(main[1])}
          />
          <img
            src={items[2]}
            alt="sneaker-one"
            className="size"
            onClick={() => setImage(main[2])}
          />
          <img
            src={items[3]}
            alt="sneaker-one"
            className="size"
            onClick={() => setImage(main[3])}
          />
        </div>
      </div>
      <div>
        <h5>SNEAKER COMPANY</h5>
        <h1>
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p className="product-info">
          These low profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber cuter sole. they'll withstand everything
          the weather can offer.
        </p>
        <div className="price-info">
          <div>
            <p className=" price">$125.00</p>
            <div className="rate">50%</div>
          </div>
          <p className="former-price">$250.00</p>
        </div>

        <div className="buy-section">
          <div className="plus-minus">
            <img
              src={minus}
              alt="minus"
              className="minus"
              onClick={() => setCount((count) => count - 1)}
            />
            <output>{count}</output>
            <img
              src={plus}
              alt="plus"
              className="plus"
              onClick={() => setCount((count) => count + 1)}
            />
          </div>
          <button className="add-to-cart">
            <span>
              <MdOutlineShoppingCart />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </Mainstyle>
  );
}

const Mainstyle = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  font-family: Kumbh Sans;
  margin-top: 5rem;

  .product-1 {
    display: block;
    max-width: 25rem;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: 10px;
  }

  .product-2 {
    display: none;
  }

  .slider-container {
    position: relative;
  }

  .right-arrow {
    display: none;
  }

  .left-arrow {
    display: none;
  }

  .small-pic {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .size {
    width: 5rem;
    margin: 0.5rem;
    border-radius: 10px;
  }

  .size:hover {
    filter: opacity(50%);
    outline: 3px solid orange;
    cursor: pointer;
  }

  h5 {
    color: #7b7d82;
  }

  h1 {
    font-weight: bolder;
  }

  .product-info {
    max-width: 24rem;
    color: #a0a1a1;
    font-weight: 500;
  }

  .rate {
    display: inline-block;
    color: white;
    font-weight: bolder;
    border-radius: 5px;
    padding: 2px 4px;
    background-color: black;
    margin-inline-start: 1rem;
  }

  .price {
    margin-top: 0;
    display: inline-block;
    font-weight: bolder;
    font-size: clamp(15px, 1.5rem, 20rem);
  }

  .former-price {
    margin-top: 0;
    color: #6d7077;
    text-decoration: line-through;
    text-decoration-color: #b8bbbe;
  }

  .buy-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .add-to-cart {
    color: black;
    font-weight: bolder;
    background-color: #ff7d1b;
    width: 65%;
    padding: 10px 0;
    border: none;
    border-radius: 5px;
  }

  .add-to-cart:hover {
    background-color: #f59043;
    cursor: pointer;
  }

  .plus-minus {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30%;
    padding: 10px 0rem;
    border-radius: 5px;
    background-color: #f7f8fd;
  }

  .plus,
  .minus {
    cursor: pointer;
  }

  span {
    padding-inline-end: 7px;
  }

  @media (max-width: 740px) {
    .price-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .product-info {
      max-width: 18rem;
    }
  }

  @media (max-width: 424px) {
    margin-top: 0;

    .right-arrow {
      display: block;
      position: absolute;
      top: 50%;
      left: 80%;
      width: 2rem;
      aspect-ratio: 1;
      text-align: center;
      font-size: larger;
      font-weight: bolder;
      background-color: white;
      border-radius: 50%;
      transform: translate(50%, -50%);
      z-index: 2;
      cursor: pointer;
    }

    .left-arrow {
      display: block;
      position: absolute;
      top: 50%;
      right: 86%;
      width: 2rem;
      aspect-ratio: 1;
      text-align: center;
      font-size: larger;
      font-weight: bolder;
      background-color: white;
      border-radius: 50%;
      transform: translate(50%, -50%);
      z-index: 2;
      cursor: pointer;
    }

    .small-pic {
      display: none;
    }

    .product-1 {
      display: none;
    }

    .product-2 {
      display: block;
      max-width: 100%;
      aspect-ratio: 1;
      object-fit: contain;
      border-radius: 0;
    }

    .buy-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    .add-to-cart {
      color: black;
      font-weight: bolder;
      background-color: #ff7d1b;
      width: 100%;
      padding: 10px 0;
      border: none;
      border-radius: 5px;
    }

    .plus-minus {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      padding: 10px 0rem;
      border-radius: 5px;
      background-color: #f7f8fd;
    }
  }
`;
