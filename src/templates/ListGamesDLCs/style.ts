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

export const Cards = styled.div(
  ({ theme }) => `
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    width: 5px;
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${theme.black};
    border: none;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${theme.primary};
  }
`,
);
