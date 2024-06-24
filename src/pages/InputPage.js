import React, { useState } from "react";
import {
  InputStyle,
  MemberItemstyle,
  SearchForm,
  SearchSection,
} from "../styles/InputStyle";

// search 카테고리
const searchCate = [
  {
    id: 1,
    title: "선수",
  },
  {
    id: 2,
    title: "구단",
  },
];

// 더미데이터
const MemberData = [
  {
    name: "나성범",
    team: "KIA 타이거즈",
  },
  {
    name: "소크라테스",
    team: "KIA 타이거즈",
  },
  {
    name: "로하스",
    team: "KT 위즈",
  },
  {
    name: "황재균",
    team: "KT 위즈",
  },
  {
    name: "박해민",
    team: "LG 트윈스",
  },
  {
    name: "홍창기",
    team: "LG 트윈스",
  },
  {
    name: "데이비슨",
    team: "NC 다이노스",
  },
  {
    name: "손아섭",
    team: "NC 다이노스",
  },
  {
    name: "에레디아",
    team: "SSG 랜더스",
  },
  {
    name: "최정",
    team: "SSG 랜더스",
  },
  {
    name: "김재환",
    team: "두산 베어스",
  },
  {
    name: "양의지",
    team: "두산 베어스",
  },
  {
    name: "김원중",
    team: "롯데 자이언츠",
  },
  {
    name: "나승엽",
    team: "롯데 자이언츠",
  },
  {
    name: "구자욱",
    team: "삼성 라이온즈",
  },
  {
    name: "원태인",
    team: "삼성 라이온즈",
  },
  {
    name: "이재현",
    team: "삼성 라이온즈",
  },
  {
    name: "도슨",
    team: "키움 히어로즈",
  },
  {
    name: "후라도",
    team: "키움 히어로즈",
  },
  {
    name: "노시환",
    team: "한화 이글스",
  },
  {
    name: "류현진",
    team: "한화 이글스",
  },
];

const InputPage = () => {
  const [type, setType] = useState(1);
  const [search, setSearch] = useState(null);
  const [inputValue, setInputValue] = useState("");
  
  return (
    <InputStyle>
      <SearchSection>
        <select onChange={e => setType(e.target.value)}>
          {searchCate.map(item => {
            return (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            );
          })}
        </select>
        <SearchForm>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") {
                e.preventDefault();
                setSearch(inputValue);
              }
            }}
          ></input>
          <button type="button" onClick={() => setSearch(inputValue)}></button>
        </SearchForm>
      </SearchSection>

      {MemberData.map((item, index) => {
        const isBold =
        (type == 1 && search && item.name.includes(search)) ||
        (type == 2 && search && item.team.includes(search));
        return (
          <MemberItemstyle key={index}>
            <p style={{ fontWeight: isBold ? 600 : 400 }}>
              {index + 1}. {item.name} ({item.team})
            </p>
          </MemberItemstyle>
        );
      })}
    </InputStyle>
  );
};

export default InputPage;
