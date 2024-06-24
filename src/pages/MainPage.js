import React from "react";
import { useNavigate } from "react-router-dom";
import { MainStyle } from "../styles/MainStyle";



const MainPage = () => {
  // 경로 이동
  const navigate = useNavigate();
  const moveToInput = () => {
    navigate(`/input`);
  };
  const moveToCard = () => {
    navigate(`/card`);
  };
  
  return (
    <MainStyle>
      <button onClick={moveToInput}>
        문제1. 검색 시 검색 결과에 해당하는 내용 두껍게 나오게 하기
      </button>
      <button onClick={moveToCard}>문제2. 클릭하면 카드가 뒤집히게 하기</button>
    </MainStyle>
  );
};

export default MainPage;
