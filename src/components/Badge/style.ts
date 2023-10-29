import styled from 'styled-components';
import { IBadgePropsLayout } from './type';

export const Badge = styled.span<IBadgePropsLayout>(
  ({ theme, issmall, color, bgColor }) => `
  div {
    color: ${theme[color]};
    background-color: ${bgColor ? theme[bgColor] : theme.spaceGray};
    border-radius: ${issmall ? '8px' : '12px'};
    padding: ${issmall ? '3px 10px' : '10px 20px'};
    font-family: var(--font-montserrat);
    font-weight: 400;
    letter-spacing: 0px;
  }
`,
);
