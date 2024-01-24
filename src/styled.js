import styled, { css } from "styled-components";
import * as colors from "./colors";

const gutter = 15;
const containerWidth = 1140;

// styled components
// ------------------------------

const sections = {
  intro: { bg: [colors.N10, colors.N20], text: "inherit" },
  config: { bg: [colors.N700, colors.N800], text: "white" },
  example: { bg: [colors.N10, colors.N20], text: "inherit" },
};
export const Section = styled.section`
  ${(props) => {
    const theme = sections[props.area];
    return css`
      background: linear-gradient(to bottom right, ${theme.bg.join(",")})
        no-repeat left top;
      color: ${theme.text};
    `;
  }}
`;

export const Container = styled.div`
  ${(props) => {
    return css`
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: auto;
      margin-left: auto;
      max-width: ${containerWidth}px;
      min-height: 100vh;
      padding: 30px 15px;
    `;
  }}
`;
export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Repo = styled.a`
  ${(props) => {
    return css`
      align-items: center;
      display: flex;
      :hover: {
        text-decoration: none;
        span: {
          border-bottom-color: #b3bac5;
        }
      }
      span: {
        border-bottom: 1px solid transparent;
        color: inherit;
        font-weight: 500;
        padding-bottom: 5px;
        text-decoration: none;
        transition: border-color 200ms;
      }
    `;
  }}
`;
export const Icon = styled.div`
  font-size: 32px;
  height: 32px;
  line-height: 1.2;
  margin-right: 0.5em;
  position: relative;
  width: 32px;
`;

export const StretchGroup = styled.div``;

export const GithubAnchor  = styled.a`
  color: #97a0af;
  transition: color 200ms;
  :hover,
  :focus {
    color: #253858;
  }
`;


export const Body = styled.div`
  align-items:center;
  display:flex;
  flex:1;
  justify-content:space-between;
  margin-bottom:1em;
  margin-top:1em;
`;

export const Footer = styled.div``;
