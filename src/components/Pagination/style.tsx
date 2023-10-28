import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuPaginate = styled.div(
  ({ theme }) => `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  select {
    width: 12%;
    height: 30px;
    text-align: center;
    background-color:${theme.secondary};
    border-radius: var(--border-radius);
    border: 1px solid ${theme.primary};
    outline: none;
    color: ${theme.white};
    option {
      color: ${theme.white};
    }
  }
`,
);

export const ReactPaginate = styled.div(
  ({ theme }) =>
    `
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;
    margin-top: 30px;
    .previous, .next {
      background-color: ${theme.primary};
      padding: 5px 18px;
      border-radius: var(--border-radius);
      &:hover {
        filter: brightness(0.85);
        cursor: pointer;
      }
    },
    .active {
      background-color: ${theme.spaceGray};
      border-radius: var(--border-radius);
    }
    li:not(.previous):not(.next):not(.break) {
      position: relative;
      text-decoration: none;
      padding: 0 10px;
    }

    li:not(.previous):not(.next):not(.break):not(.active)::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: ${theme.primary};
      transition: width 0.3s ease, left 0.3s ease;
    }

    li:not(.previous):not(.next):not(.break):not(.active):hover::before {
      width: 100%;
      left: 0;
    }

    li:not(.previous):not(.next):not(.break):not(.active):hover {
      transform: translateY(-2px);
    }
  }
`,
);
