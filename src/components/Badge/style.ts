import styled from 'styled-components';
import { IBadgePropsLayout } from './type';

export const Badge = styled.span<IBadgePropsLayout>(
  ({ theme, isPrimary }) => `
  color: ${isPrimary ? theme.label : theme.white};
  background-color: ${isPrimary ? theme.spaceGray : theme.badge};
  border-radius: ${isPrimary ? '8px' : '12px'};
  padding: ${isPrimary ? '5px 10px' : '10px 20px'};
  font-family: var(--font-montserrat);
  letter-spacing: 0px;,
`,
);
