import styled from 'styled-components';

export const Wrapper = styled.div(
  () =>
    `
  button{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
  }

`,
);

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Content = styled.div`
  width: 65%;
  padding-left: 50px;
  .title {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  @media (max-width: 767px) {
    width: 82%;
    padding-left: 0;

    .title {
      flex-direction: column;
      align-items: start;
      gap: 0;
    }
  }

  @media (max-width: 510px) {
    width: 100%;
  }
`;
