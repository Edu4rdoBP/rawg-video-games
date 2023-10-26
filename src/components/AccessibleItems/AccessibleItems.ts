import styled from 'styled-components';

export const AccessibleItems = styled.div`
  display: flex;
  justify-content: certer;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  div,
  button {
    gap: 5px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 1px 10px;
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;
