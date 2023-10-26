import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 57px;
  height: 57px;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
