import styled, { css } from 'styled-components';
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
  padding: 18px;
  box-sizing: border-box;
`;

export const ModalMain = styled.div`
  padding: 0px ${pxToRem(58)}rem;
`;

export const Title = styled.span`
  
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
    width: 14px;
    transform: rotate(45deg);
  }
  div:last-child {
    width: 14px;
    transform: rotate(135deg);
  }
`;

export const ModalDefaultButtonWrapper = styled.div`
  width: ${pxToRem(280)}rem;
  margin-bottom: ${pxToRem(6)}rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalSubButton = styled.div`
  font-size: 13px;
  color: #5a5a5a;
  text-align: center;
  margin: 3px;
  cursor: pointer;
`;

export const ModalErrorText = styled.div`
  font-size: 14px;
  height: ${pxToRem(20)}rem;
  color: ${COLOR.color_blue_strong};
  text-align: center;
  margin-bottom: ${pxToRem(18)}rem;
`;

export const ModalTitle = styled.h3<{ top?: number; bottom?: number }>`
  font-size: ${pxToRem(32)}rem;
  text-align: center;
  font-weight: 500;
  margin-top: ${props => (props.top ? pxToRem(props.top) : pxToRem(48))}rem;
  margin-bottom: ${props => (props.bottom ? pxToRem(props.bottom) : pxToRem(100))}rem;
`;

export const ModalSubTitle = styled.p`
  font-size: 14px;
  height: ${pxToRem(20)}rem;
  color: #5a5a5a;
  margin: ${pxToRem(18)}rem 0px;
  text-align: center;
`;