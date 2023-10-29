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
  ({ theme, color }) => `
    background-color: ${color ? color : theme.blur};
    border-radius: var(--border-radius);
    padding: 10px 20px;
    font-family: var(--font-montserrat);
    font-weight: 300;
    letter-spacing: 0px;
  `,
);
