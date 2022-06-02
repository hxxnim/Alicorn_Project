import { COLOR } from '@/../styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 12%;
  border-top: 1px solid ${COLOR.color_message_border};
  border-right: 1px solid ${COLOR.color_container_border};
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  .i {
    opacity: 0.9;
    float: none;
    margin-left: 8px;
    color: ${COLOR.color_blue_strong};
    width: 16px;
    height: 16px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
  }
`;