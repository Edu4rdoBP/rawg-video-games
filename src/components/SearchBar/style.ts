import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Input = styled.input``;

export const Form = styled.form(
  ({ theme }) => `
  border: 1px solid ${theme.primary}
`,
);
