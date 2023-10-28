import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Description = styled.p`
  color: #c8c8c8;
  font-size: 16px;
`;

export const Info = styled.p(
  ({ theme }) => `
  color: ${theme.primary};
  font-style: italic;
`,
);

export const Statistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p,
  span {
    font-size: var(--font-size) !important;
  }
`;
