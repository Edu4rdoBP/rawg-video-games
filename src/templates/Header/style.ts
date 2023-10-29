import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 25px;
  }
`;

