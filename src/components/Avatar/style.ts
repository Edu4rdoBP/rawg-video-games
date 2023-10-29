import styled from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => `
  border-radius: 50%;
  border: 1px solid ${theme.primary};
  background-color: #030303;
  width: 57px;
  height: 57px;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,
);
