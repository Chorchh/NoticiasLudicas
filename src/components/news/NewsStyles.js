import styled from "styled-components";
import { Button, Section } from "../globalComponents/GlobalComponents";

export const NewsSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  width: 80%;
`;

export const CategorieBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

export const CategorieBtn = styled(Button)`
  background-color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
  color: ${(props) => (props.isSelected ? "#000000" : "#ffffff")};
  display: flex;
  flex-wrap: wrap;
`;

export const NewsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  gap: 20px;
  width: 100%;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;

  .IconFav {
    color: red;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
    height: 30px;
  }
`;

export const NewsImage = styled.img`
  height: 200px;
  width: 60%;
  margin-top: 20px;
`;

export const NewsTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

export const NewsText = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #000;
  text-align: center;
  width: 60%;
`;
