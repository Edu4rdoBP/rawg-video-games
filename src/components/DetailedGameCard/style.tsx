import styled from 'styled-components';

interface IBackgroundImage {
  backgroundImage?: string;
}

export const Wrapper = styled.div`
  margin: 70px 0;
`;

export const Card = styled.div(
  ({ theme }) => `
  width: 100%;
  height: auto;
  overflow: hidden;  height: 25%;

  background-color: ${theme.blur};
  border-radius: calc(var(--border-radius) + 10px);
  backdrop-filter: blur(11px);
  display: flex;
  h2 {
    text-align: center;
  }

  @media (max-width: 1023px){
    height: 100%;
    flex-direction: column;
  }
`,
);

export const BackgroundImage = styled.div<IBackgroundImage>(
  ({ backgroundImage }) => `
  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
  background-size: 155%;
  background-position: center;
  min-width: 57%;
  min-height: 300px;
  z-index: -1;

  @media (max-width: 1240px){
    background-size: cover;
  }
`,
);

export const Content = styled.div`
  padding: 30px 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
    padding: 30px;
  }
`;
