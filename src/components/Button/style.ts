import styled from 'styled-components';
import { IButtonPropsLayout } from './type';

export const CustomButton = styled.button(
  ({ theme }) => `
  border-radius: 10px;
  background-color: ${theme.dark};
  padding: 15px 40px;
  color: ${theme.primary};
  display: flex;
  gap: 10px;
  align-items: center;
  &: hover{
  }
`,
);

export const Button = styled.button<IButtonPropsLayout>(
  ({ color, theme }) => `
    background-color: ${color ? theme[color] : 'transparent'};
    border-radius: var(--border-radius);
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    font-family: var(--font-montserrat);
    font-weight: 300;
    letter-spacing: 0px;
    &:hover {
      filter: brightness(0.85);
      transition: 0.3s ease;
    }
  `,
);
