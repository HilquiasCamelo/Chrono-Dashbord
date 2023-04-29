import styled, { createGlobalStyle } from "styled-components";
import { defaultTheme } from "../../styles/default";

export const HomeContainer = styled.div`
margin-top:1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${defaultTheme['gray-800']};

`;

 


export  const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Title = styled.h1`
  color: ${defaultTheme.white};
  font-size: 3rem;
  margin-bottom: 1rem;
  
`;

export const Subtitle = styled.h2`
  color: ${defaultTheme['gray-400']};
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  height: calc(90% - (1.75rem * 2))
`;

