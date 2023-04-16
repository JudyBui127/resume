import React from 'react';
import { StyledContainer } from './styles';

import Introduction from '../introduction';
import Projects from '../projects';


const Homepage = () => {
  return (
    <StyledContainer spacing={2}>
      <Introduction />
      <Projects />
    </StyledContainer>
  )
};

export default Homepage;