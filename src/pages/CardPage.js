import React, { useState } from "react";
import { CardStyle, ImgItemstyle } from "../styles/CardStyle";

// 더미데이터
const ImgData = [
  {
    name: "구자욱",
    image: "assets/images/koo.jpg",
  },
  {
    name: "김영웅",
    image: "assets/images/hero.jpg",
  },
  {
    name: "원태인",
    image: "assets/images/won.jpg",
  },
  {
    name: "이재현",
    image: "assets/images/lee.jpg",
  },
];

const CardPage = () => {
  const [showImg, setShowImg] = useState(Array(ImgData.length).fill(false));

  const handleClick = index => {
    setShowImg(prevState =>
      prevState.map((item, i) => (i === index ? !item : item)),
    );
  };

  return (
    <CardStyle>
      {ImgData.map((item, index) => {
        return (
          <ImgItemstyle key={index}>
            <img
              src={showImg[index] ? item.image : "assets/images/lions.jpg"}
              style={{ border: showImg[index] ? "2px solid blue" : "none" }}
              alt={item.name}
              onClick={() => handleClick(index)}
            />
          </ImgItemstyle>
        );
      })}
    </CardStyle>
  );
};

export default CardPage;
