import { Stack } from '@mui/material';
import React from 'react';
import { ButtonText, CommonText, DevelopText, EmailContainer, HelloText, 
  StyledButton } from './styles';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from "@mui/material/IconButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Introduction = () => {
  return (
    <Stack>
      <Stack width="100%" justifyContent="flex-start">
        <HelloText>
          Hello! This is Judy.
        </HelloText>
      </Stack>
      <DevelopText>
        I develop apps.
      </DevelopText>
      <CommonText>
        I'm a full stack developer with a passion of
        building impactful software that bring value to human life.
        I also love dogs, cats, and tea.
      </CommonText>
      <EmailContainer>
        <IconButton onClick={() =>
          window.open('https://github.com/JudyBui127', '_blank')}>
          <GitHubIcon style={{ fontSize: 40, fill: "white" }} />
        </IconButton>
        <IconButton onClick={() =>
          window.open('https://www.linkedin.com/in/judybui/', '_blank')}>
          <LinkedInIcon style={{ fontSize: 40, fill: "white" }} />
        </IconButton>
        <IconButton onClick={() =>
          window.open('mailto:judybui712@gmail.com', '_blank')}>
          <EmailIcon style={{ fontSize: 40, fill: "white" }} />
        </IconButton>
      </EmailContainer>
      <Stack 
        width="100%" 
        justifyContent="center" 
        direction="row"
        marginTop="16px">
        <StyledButton 
          variant="outlined" 
          width="fit-content" 
          onClick={() => window.location.href ='/Judy-Bui-Resume.pdf'}>
          <ButtonText>view my resume</ButtonText>
        </StyledButton>
      </Stack>
    </Stack>
  )
};

export default Introduction;