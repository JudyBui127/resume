import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
  text-align: center;
  // border-top: 0.5px solid grey;
  background-color: #0e141b;
`;

export const FooterText = styled(Typography)`
  &&{
    font-weight: 500;
    font-size: 16px;
    margin: 0 80px;
    font-family: "Roboto";
    color: grey;
  }
`;