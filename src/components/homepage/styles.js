import { Stack, Typography } from "@mui/material";
import styled from "styled-components";
import Button from '@mui/material/Button';

export const StyledContainer = styled(Stack)`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 16px 24px;
  @media all and (min-width: 768px) { 
    margin: 40px 150px 60px;
  }
`;




