import styled from 'styled-components';
import { IBadgePropsLayout } from './type';

export const Badge = styled.span<IBadgePropsLayout>(
  ({ theme, isSmall, color }) => `
  div {
    color: ${theme[color]};
    background-color: ${isSmall ? theme.spaceGray : theme.badge};
    border-radius: ${isSmall ? '8px' : '12px'};
    padding: ${isSmall ? '3px 10px' : '10px 20px'};
    font-family: var(--font-montserrat);
    font-weight: 300;
    letter-spacing: 0px;
  }
`,
);
