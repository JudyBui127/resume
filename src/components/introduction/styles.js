import { Typography } from "@mui/material";
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
    font-size: 24px;
    text-transform: uppercase;

    @media all and (min-width: 768px) { 
      font-size: 30px;
    }
  }
`;
export const DevelopText = styled(Typography)`
  &&{
    font-weight: 600;
    font-size: 42px;
    font-family: "Playfair Display";

    @media all and (min-width: 768px) { 
      font-size: 72px;
    }
  }
`;

export const CommonText = styled(Typography)`
  &&{
    font-weight: 500;
    font-size: 18px;
    padding-top: 16px;

    @media all and (min-width: 768px) { 
      font-size: 32px;
    }
  }
`;

export const EmailContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media all and (min-width: 768px) { 
    margin-top: 40px;
  }
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  height: 48px;
  &&{
    color: white
  }
`;

export const ButtonText = styled(Typography)`
  &&{
    font-weight: 500;
    font-family: "Playfair Display";
    text-transform: none;
  }
`;
