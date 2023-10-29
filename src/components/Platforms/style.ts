import styled from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => `
  color: ${theme.textMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    text-transform: uppercase;
    display: flex;
    gap: 6px;
    align-items: center;
  }
`,
);

export const Icon = styled.div`
  img {
    width: 15px !important;
    height: 15px !important;
  }
`;
