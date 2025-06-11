import { useState } from "react";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

const imgArray = [image1, image2, image3, image4]

export default function ImageSlider(){
    const [currentIndex, setCurrentIndex] = useState(0);
    function next() {
        if (currentIndex == imgArray.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    
      function prev(){
        if (currentIndex == 0) {
          setCurrentIndex(imgArray.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
      }

    return (
      <div className="slider-container">
        <div className="right-arrow" onClick={() => next()}>
          ›
        </div>
        <div className="left-arrow" onClick={() => prev()}>
          ‹
        </div>
        <img
          src={imgArray[currentIndex]}
          alt="slider-img"
          className="product-2"
        />
      </div>
    );
}