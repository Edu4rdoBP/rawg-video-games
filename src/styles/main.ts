import styled from 'styled-components';
export const Main = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 70px;

  @media (max-width: 767px) {
    width: 80%;
  }
`;
