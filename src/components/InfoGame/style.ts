import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Description = styled.p(
  ({ theme }) => `
    color: ${theme.white};
    font-weight: 300;
    text-align: justify;
`,
);

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

export const InfoData = styled.div(
  ({ theme }) => `
div{
  color: ${theme.textMuted};
  font-weight: 300;
  font-size: calc(var(--font-size) - 2px);

}
`,
);

export const Media = styled.div(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 300;
  a {
    text-decoration: underline;
    color: ${theme.textMuted};
    &:hover {
      color: ${theme.primary};
    }
  }
`,
);
