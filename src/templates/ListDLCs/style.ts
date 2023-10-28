import styled from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => `
  .tag {
    border-bottom: 1px solid ${theme.blur};

    div:first-child {
      width: 200px;
    }
  }

`,
);

export const Cards = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
`;
