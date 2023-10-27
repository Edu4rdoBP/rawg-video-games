import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Wrapper = styled.div`
  width: 31%;
  position: relative;
`;

export const Input = styled.input(
  ({ theme }) => `
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  letter-spacing: 0px;
  color: ${theme.label};
  font-family: var(--font-montserrat)
  opacity: 1;
  width: 100%;`,
);

export const Form = styled.form(
  ({ theme }) => `
  border: 1px solid ${theme.primary};
  background-color: ${theme.secondary};
  border-radius: 47px;
  padding: 12px 40px 12px 50px;
  position: relative;

    &::placeholder {
    color: ${theme.textMuted}}
`,
);

export const SearchIcon = styled(AiOutlineSearch).attrs({
  size: 21,
})(
  ({ theme }) => `
  color: ${theme.primary};
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`,
);

export const ListViewWrapper = styled.div(
  ({ theme }) => `
  z-index: 100;
  background-color: ${theme.badge};
  position: absolute;
  left: 3.5%;
  width: 93%;
  border-radius: 0 0 15px 15px;
  padding: 15px;


 .games-search-list-view {
     max-height: 190px;
     overflow-y: scroll;
     &::-webkit-scrollbar {
         width: 8px;
    }
     &::-webkit-scrollbar-track {
         border-radius: 8px;
         background-color: none;
         border: none;
         box-shadow: none;
    }
     &::-webkit-scrollbar-thumb {
         border-radius: 8px;
         background-color: ${theme.textMuted}
        ;
    }
}

  .game-list-item {
    padding: 4px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${theme.primary};
    }

    img {
      width: 60px;
      height: 30px;
    }

  }

`,
);
