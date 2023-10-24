
'use client'
import styled from 'styled-components';

export const AccessibleHeader = styled.nav(({ theme }) => `
  background-color: ${theme.dark};
  color: ${theme.primary};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`);
