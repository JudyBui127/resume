import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const HeaderText = styled(Typography)`
  &&{
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 28px;
  }
`;

export const DotText = styled(Typography)`
  &&{
    font-family: "Playfair Display";
    font-weight: 600;
    font-size: 30px;
    color: #ff5277;
    margin-left: 4px;
  }
`;