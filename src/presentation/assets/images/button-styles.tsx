import { css } from "styled-components";
import styled from '@emotion/styled'
import { ButtonProps } from "./button";

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: 0.6rem 1.4rem;
    margin-left: 0.15rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverButtonBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ variant, isVisible }) => css`
    display: ${isVisible ? "block" : "none"};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    border: 0;
    border-radius: 10px;
    transition: background-color 0.2s;
    cursor: pointer;

    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.3s ease;

    ${variant && variants[variant]}

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;