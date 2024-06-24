import styled from "@emotion/styled";

export const InputStyle = styled.div`
  display: block;
`;

export const SearchSection = styled.div`
  display: flex;
  margin: 20px auto;
  width: 330px;
  height: 40px;
  border: 1px solid #bebebe;
  select {
    width: 100px;
    border: none;
    border-right: 1px solid #bebebe;
    padding-left: 5px;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  margin: 3px auto;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height: 35px;
  padding: 0 10px;

  input {
    border: none;
    width: 180px;
    height: 30px;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    width: 20px;
    height: 20px;
    background-image: url("assets/images/bt_search.svg");
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const MemberItemstyle = styled.div`
  display: block;
  text-align: center;
  p {
    font-size: 16px;
    margin: 10px 0px;
  }
`;
