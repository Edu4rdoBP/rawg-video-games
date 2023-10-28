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
  height: 550px;
  background-color: ${theme.blur};
  border-radius: calc(var(--border-radius) + 10px);
  overflow: hidden;
  backdrop-filter: blur(11px);
  display: flex;
  h2 {
    text-align: center;
  }
`,
);

export const BackgroundImage = styled.div<IBackgroundImage>(
  ({ backgroundImage }) => `
  background-image: url('${backgroundImage}');
  background-repeat: no-repeat;
  background-size: 155%;
  background-position: bottom center;
  min-width: 57%;
  height: 100%;
  z-index: -1px;
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
`;
