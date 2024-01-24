import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToastsContainer from "./components/ToastsContainer";
import { useToast } from "./hooks/useToast";
import {
  Body,
  Container,
  Footer,
  Header,
  Icon,
  Repo,
  Section,
  StretchGroup,
} from "./styled";
import GithubLogo from "./components/GithubLogo";

function App() {
  const toast = useToast();
  const repoUrl = "https://github.com/adwaitya/custom-toast-notification";

  return (
    <>
      <Section area="intro">
        <Container>
          <Header>
            <Repo href={repoUrl} target="_blank">
              <Icon role="img">🍞</Icon>
              <span>React Toast Notifications</span>
            </Repo>
            <GithubLogo url={repoUrl} />
          </Header>
          <Body>
            
          </Body>
          <Footer>
            <div>
              <span>by </span>
              <a
                href="https://www.linkedin.com/in/adwaitya-sadhukhan-6a213988/"
                target="_blank"
              >
                @Adwaitya
              </a>
            </div>
            <div></div>
          </Footer>
        </Container>
      </Section>
    </>
  );
}

export default App;
