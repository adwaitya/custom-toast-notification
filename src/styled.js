import styled, { css } from "styled-components";
import * as colors from "./colors";

const gutter = 15;
const containerWidth = 1140;

const buttonBg = {
  info: [colors.B100, colors.B200],
  success: [colors.G200, colors.G300],
  error: [colors.R300, colors.R400],
  warning: [colors.Y300, colors.Y400],
  snack: [colors.P300, colors.P400],
};

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

export const StretchGroup = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 100%;
`;
export const ContentBlock = styled.div`
  ${(props) => {
    return css`
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
    `;
  }}
`;

export const CodeBlock = styled.div`
  ${(props) => {
    return css`
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: space-between;
      border: 1px solid #ddd;
    `;
  }}
`;

export const GithubAnchor = styled.a`
  color: #97a0af;
  transition: color 200ms;
  &:hover,
  :focus {
    color: #253858;
  }
`;

export const Body = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 1em;
`;

export const Button = styled.button`
  ${(props) => {
    const bgcolor = buttonBg[props.appearance ?? "success"];
    return css`
      background: linear-gradient(to bottom right, ${bgcolor.join(",")})
        no-repeat left top;
      color: white;
      border: 0;
      border-radius: 4px;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      line-height: 2.2em;
      padding-left: 1em;
      padding-right: 1em;
      transition: box-shadow 150ms cubic-bezier(0.2, 0, 0, 1),
        transform 150ms cubic-bezier(0.2, 0, 0, 1);
      &:hover,
      :focus {
        outline: 0;
        boxshadow: 0 2px 1px rgba(9, 30, 66, 0.13);
      }
      &:hover {
        transform: scale(1.03);
      }
      &:active {
        transform: scale(0.97);
        boxshadow: 0 0 0 rgba(9, 30, 66, 0.13);
      }
    `;
  }}
`;

export const StyledRadio = styled.input`
  ${(props) => {
    const bgcolor = buttonBg[props.color ?? "success"];
    return css`
      appearance: none;
      margin: 0;
      width: 20px;
      height: 20px;
      border: 2px solid ${bgcolor[1]};
      border-radius: 50%;
      transition: all 0.1s ease-in-out;

      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 2px;
      }

      &:checked::after {
        background: linear-gradient(to bottom right, ${bgcolor.join(",")})
          no-repeat left top;
      }

      &:hover::after {
        background: linear-gradient(to bottom right, ${bgcolor.join(",")})
          no-repeat left top;
      }

      &:focus {
        outline: 2px solid ${colors.Y400};
      }

      &:disabled {
        cursor: not-allowed;
        border-color: #ddd;
        background: linear-gradient(to bottom right, ${bgcolor.join(",")})
          no-repeat left top;

        &::after {
          background: linear-gradient(to bottom right, ${bgcolor.join(",")})
            no-repeat left top;
        }

        &:checked::after {
          background: linear-gradient(to bottom right, ${bgcolor.join(",")})
          no-repeat left top;
        }
      }
    `;
  }}
`;

export const Footer = styled.div``;
