import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 50px 0px;
  max-width: 1300px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: 3px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #fff;
    color: #000;
    border: 3px solid #000;
    font-weight: 700;
    transition: all 0.5s ease;
  }
`;
