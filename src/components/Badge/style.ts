import styled from 'styled-components';
import { IBadgePropsLayout } from './type';

export const Badge = styled.span<IBadgePropsLayout>(
  ({ theme, size, color, bgColor }) => `
  div {
    color: ${color};
    background-color: ${bgColor ? bgColor : theme.spaceGray};
    border-radius: ${size === 'small' ? '8px' : '12px'};
    padding: ${size === 'small' ? '3px 10px' : '10px 20px'};
    font-family: var(--font-montserrat);
    font-weight: 400;
    letter-spacing: 0px;
  }
`,
);
