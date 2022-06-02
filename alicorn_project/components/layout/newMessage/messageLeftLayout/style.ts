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
  border-right: 1px solid ${COLOR.color_container_border};
  height: 14%;
  background-color: ${COLOR.color_default_background};
  z-index: 999;  
`;