import styled from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => `
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${theme.blur};
  display: flex;
  justify-content: end;
  `,
);
