import styled from 'styled-components';
import { pxToRem, COLOR } from '@/../styles/theme';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
`;

export const Modal = styled.div`
  width: ${pxToRem(420)}rem;
  height: ${pxToRem(580)}rem;
  background-color: ${COLOR.color_default_background};
  padding: 12px;
  box-sizing: border-box;
`;

export const ModalDeleteButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalDeleteButton = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  cursor: pointer;
  > div {
    position: absolute;
    width: ${pxToRem(Math.sqrt(144 + 144))}rem;
    height: ${pxToRem(2)}rem;
    border-radius: 10px;
    background-color: #3d3d3d;
  }
  div:first-child {
    transform: rotate(45deg);
  }
  div:last-child {
    transform: rotate(135deg);
  }
`;

