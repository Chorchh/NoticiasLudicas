import styled from "styled-components";
import { Section } from "../globalComponents/GlobalComponents";

export const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 150px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #000;
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: #000;
  text-align: center;
  width: 60%;
  margin: 20px 0;
`;

export const HeroImage = styled.img`
  height: 300px;

  @media (max-width: 992px) {
    display: none;
  }
`;
