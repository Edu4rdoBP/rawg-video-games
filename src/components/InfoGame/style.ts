import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  height: 100%;

  @media (max-width: 1023px) {
    gap: 30px;
  }
`;

export const Description = styled.p(
  ({ theme }) => `
    color: ${theme.white};
    font-weight: 300;
    text-align: justify;
`,
);

export const ContainerInfo = styled.div`
  .info {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 520px) {
    .info {
      flex-direction: column;
      p {
        flex-wrap: wrap;
      }
    }
  }
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

export const InfoData = styled.div(
  ({ theme }) => `
  div {
    font-weight: 300;
    font-size: calc(var(--font-size) - 2px);
  }
  span {
    color: ${theme.textMuted};

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
