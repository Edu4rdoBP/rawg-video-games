import styled from 'styled-components';

export const GameCard = styled.div`
  flex: 1 0 20%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
  img {
    width: 100%;
    height: 180px;
  }
`;

export const ContentCard = styled.div(
  ({ theme }) => `
  padding: 20px 15px;
  background-color: ${theme.black};
  display: flex;
  height: 150px;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0 0 10px 0;
  }
`,
);
