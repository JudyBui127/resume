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
    font-size: 30px;
    text-transform: uppercase;
  }
`;

export const DevelopText = styled(Typography)`
  &&{
    font-weight: 600;
    font-size: 72px;
    font-family: "Playfair Display";
  }
`;

export const CommonText = styled(Typography)`
  &&{
    font-weight: 500;
    font-size: 32px;
    padding-top: 16px;
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



