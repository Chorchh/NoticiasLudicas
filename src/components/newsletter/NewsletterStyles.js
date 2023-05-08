import styled from "styled-components";
import { Button, Section } from "../globalComponents/GlobalComponents";

export const NewsletterSection = styled(Section);

export const NewsletterContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const NewsletterTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  text-align: center;
`;

export const NewsletterInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

export const NewsletterInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 10px;
  color: #000000;
  padding: 0 20px;
`;

export const NewsletterButton = styled(Button);
