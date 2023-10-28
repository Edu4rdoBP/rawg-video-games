import styled from 'styled-components';

export const Content = styled.div(
  ({ theme, color }) => `
  border-radius: 20px;
  background-color: ${color ? theme[color] : theme.primary};
  padding: 5px 37px;
  text-transform: uppercase;
  text-align: center;
`,
);
