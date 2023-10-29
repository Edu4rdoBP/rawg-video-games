import styled from 'styled-components';

export const SocialNetworks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20x !important;
  align-items: center;
  img:hover {
    filter: invert(40%);
    transition: 0.2s;
  }

  @media (max-width: 767px) {
    justify-content: center;

    div:last-child{
      justify-content: center;
    }
`;
