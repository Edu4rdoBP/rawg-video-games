import styled from 'styled-components';

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

export const Button = styled.button``;
