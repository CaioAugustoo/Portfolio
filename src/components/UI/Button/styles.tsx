import styled, { css } from "styled-components";
import { ButtonProps } from "types/types";

const buttonModifiers = {
  fullWidth: () => css`
    width: 100%;
    padding: 15px 40px;
  `,
};

export const Button = styled.button<Pick<ButtonProps, "fullWidth">>`
  ${({ theme, fullWidth }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 12px 40px;
    border-radius: 5px;
    border: none;
    font-family: ${theme.font.family};
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${theme.colors.secondary};
      transform: translateY(-3px);
    }

    ${fullWidth && buttonModifiers.fullWidth()}
  `}
`;
