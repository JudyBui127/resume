import { 
  Stack, 
  CardMedia,
  CardActions,
  CardContent,
} from '@mui/material';
import React from 'react';
import { 
  CommonText, 
  ProjectName, 
  HelloText, 
  StyledButton, 
  StyledCard, 
  TechStack,
  LogoContainer,
  LogoImg
} from './styles';

import restEyes from "./assets/rest-your-eyes2.png";
import crypto from "./assets/crypto-wallet.png";
import reactLogo from "./assets/React-icon.svg";
import typescriptLogo from "./assets/Typescript.svg";
import nextLogo from "./assets/Nextjs-logo.svg";
import nodeLogo from "./assets/Node-logo.svg";

const LogoIcon = ({ url, width }) => {
  return (
    <LogoContainer width={width}>
      <LogoImg src={url}/>
    </LogoContainer>
  )
};

const STACK_LOGO = {
  react:  <LogoIcon url={reactLogo} />,
  typescript: <LogoIcon url={typescriptLogo} />,
  next: <LogoIcon url={nextLogo} width="60px" />,
  node: <LogoIcon url={nodeLogo} width="60px" />
}

const Projects = () => {
  return (
    <Stack>
      <Stack width="100%" justifyContent="flex-start" margin="24px 0px">
        <HelloText>
          My Projects
        </HelloText>                                                                                                
      </Stack>
      <Stack direction="row" width="100%" justifyContent="space-around">
        <ProjectCard 
          projectImg={restEyes}
          title={"Rest Your Eyes"}
          description={"Countdown the time you look at your screen and remind you to take a quick break. It follows the 20-20-20 rules for eye health."}
          github={"https://github.com/JudyBui127/rest-your-eyes"}
          website={"https://restyoureyes.netlify.app/"}
          techStack={["typescript", "react", "next"]} />
        <ProjectCard 
          projectImg={crypto}
          title={"Cryoto Wallet"}
          description={"A decentralized wallet for cryptocurrency, help users to easily sign into their wallet, keep track with balance and transaction history."}
          github={"https://github.com/JudyBui127/crypto-wallet"}
          techStack={["typescript", "react", "node"]} />
      </Stack>
    </Stack>
  )
};

export default Projects;

const ProjectCard = ({
  projectImg,
  title,
  description,
  github,
  website,
  techStack
}) => {

  return (
  <StyledCard 
      onClick={() =>
        window.open(website || github, '_blank')}>
      <CardMedia
        component="img"
        alt="rest your eyes"
        height="200"
        image={projectImg}/>
      <CardContent>
        <ProjectName gutterBottom variant="h5" component="div">
          {title}
        </ProjectName>
        <CommonText variant="body2" color="text.secondary">
          {description}
        </CommonText>
        <TechStack>
          {techStack?.map((stack) => <>{STACK_LOGO[stack]}</> )}
        </TechStack>
      </CardContent>
      <CardActions style={{justifyContent: "flex-end", padding: "0px 8px 12px"}}>
        {website && (
          <StyledButton 
            onClick={() =>
              window.open(website, '_blank')}
            size="small">Website</StyledButton>
        )}
        <StyledButton 
          onClick={() =>
            window.open(github, '_blank')}
          size="small">Github</StyledButton>
      </CardActions>
    </StyledCard>
  )
};