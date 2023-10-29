import styled from 'styled-components';

export const Wrapper = styled.div(
  ({ theme }) => `
  .tag {
    border-bottom: 1px solid ${theme.blur};

    div:first-child {
      width: 230px;
    }
  }
`
);

export const Shots = styled.div(
  ({ theme }) => `
  display: flex;
  margin: 50px 0;
  gap: 30px;
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
  div {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      filter: brightness(0.8);
    }
  }
`
);
