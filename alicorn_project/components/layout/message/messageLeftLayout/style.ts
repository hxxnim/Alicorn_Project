import { COLOR } from '@/../styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 32%;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  border-radius: 0;
  height: 14%;
  background-color: ${COLOR.color_default_background};
  z-index: 999;  
`;

export const Divider = styled.span`
  white-space: nowrap;
  height: auto;
  text-align: center;
  font-size: 1rem;
  margin: 12px 0px;
  border-right: 2.5px solid #E5E9FF;
  padding: 0;
`;