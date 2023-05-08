import styled from "styled-components";
import { Section } from "../globalComponents/GlobalComponents";

export const NovedadesSection = styled(Section);

export const NovedadesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NovedadesTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

export const GamesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
`;

export const GameCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const GameImage = styled.img`
  height: 200px;
  width: 60%;
`;

export const GameTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  color: #000000;
`;

export const GameData = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: #000000;
`;
