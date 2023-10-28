import styled from 'styled-components';

export const Footer = styled.div`
  `

export const Row = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.textMuted};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  padding: 30px;
  border-top: 1px solid rgba(50, 50, 50, 0.7);
  border-bottom: 1px solid rgba(50, 50, 50, 0.7);
  font-size: 13px;

  div {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  
  p{
    margin-top: 7px; 
  }

  @media (max-width: 767px) {
    flex-direction: column;
    height: 150px;

    div:first-child {
      justify-content: space-between;
    }

    p {
      margin-top: 0px;
    }
  }

  @media (max-width: 600px) {
    padding-top: 20px;
    height: 175px;
    div:first-child {
      flex-direction: column;
      text-align: center;
      gap: 25px;
      margin-bottom: 28px;
    }
  }
  
  `
