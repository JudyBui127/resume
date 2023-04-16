import { Card, Grid, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Button from '@mui/material/Button';

export const StyledContainer = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 40px 150px 40px;
`;

export const HelloText = styled(Typography)`
  &&{
    color: #ff5277;
    font-weight: 600;
    font-size: 28px;
    text-transform: uppercase;
  }
`;

export const ProjectName = styled(Typography)`
  &&{
    font-weight: 600;
    font-size: 24px;
    font-family: "Playfair Display";
    margin-bottom: 10px;
  }
`;

export const CommonText = styled(Typography)`
  &&{
    font-weight: 500;
    font-size: 14px;
  }
`;

export const EmailContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  &&{
    font-family: "Arial";
    font-weight: 600;
    color: #165a9d;
  }
`;

export const ButtonText = styled(Typography)`
  &&{
    font-weight: 500;
    font-family: "Playfair Display";
    text-transform: none;
  }
`;


export const StyledCard = styled(Card)`
  &&{
    display: flex;
    flex-direction: column; 
    cursor: pointer;
    max-width: 345px;
  }
`;

export const TechStack = styled(Stack)`
  && {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: -8px;
  }
`;

export const LogoContainer = styled.div`
  width: ${prop => prop.width || "40px"};
  height: auto;
  padding: 0px 6px;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  filter: saturate(0.3);
`;

export const StyledGrid = styled(Grid)`
  justify-content: center;
  align-items: center;

`;

