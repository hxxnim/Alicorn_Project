import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 74px;
  margin: 0 auto;
  width: 1060px;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${COLOR.color_container_border};
  margin: 0;
  display: flex; 
`;
