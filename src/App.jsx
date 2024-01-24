import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToastsContainer from "./components/ToastsContainer";
import { useToast } from "./hooks/useToast";
import {
  Body,
  Button,
  CodeBlock,
  Container,
  ContentBlock,
  Footer,
  Header,
  Icon,
  Repo,
  Section,
  StretchGroup,
} from "./styled";
import GithubLogo from "./components/GithubLogo";
import { Title } from "./components/Title";
import RadioButtonGroup from "./components/RadioButtonGroup";

const appearances = [
  { value: "success", label: "Success" },
  { value: "error", label: "Error" },
  { value: "warning", label: "Warning" },
  { value: "info", label: "Info" },
];

function App() {
  const toast = useToast();
  const repoUrl = "https://github.com/adwaitya/custom-toast-notification";
  const [appearance, setAppearance] = useState(appearances[0].value);

  const radioGroupHandler = (value) => {
    console.log(value);
    setAppearance(value);
  };

  const add = (appearance) => {
    let text = "";
    switch (appearance) {
      case "success":
        toast.success("Success toast notification");
        break;
      case "warning":
        toast.warning("Warning toast notification");
        break;
      case "info":
        toast.info("Info toast notification");
        break;
      case "error":
        toast.error("Error toast notification");
        break;
      default:
        break;
    }
  };

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
            <StretchGroup>
              <ContentBlock>
                <Title tag="h1">
                  Let users know what&apos;s happening in your app.
                </Title>
                <div style={{ marginBottom: "1em", marginTop: "1em" }}>
                  <RadioButtonGroup
                    label=""
                    options={appearances}
                    onChange={radioGroupHandler}
                    selectedValue={appearance}
                  />
                </div>
                <div css={{ alignItems: "center", display: "flex" }}>
                  <Button
                    appearance={appearance}
                    onClick={() => add(appearance)}
                  >
                    Add Toast
                  </Button>
                </div>
              </ContentBlock>
              <CodeBlock></CodeBlock>
            </StretchGroup>
          </Body>
          <Footer>
            <div>
              <span>Developed By </span>
              <a
                href="https://adwaitya.netlify.app/"
                target="_blank"
              >
                 Adwaitya Sadhukhan
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
