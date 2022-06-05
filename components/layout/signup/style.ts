import { COLOR, pxToRem } from '@/../styles/theme';
import styled from 'styled-components';

export const SignUp = styled.div`
  padding-top: ${pxToRem(60)}rem;
  width: 75%;
  min-width: 1060px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const SignUpTitle = styled.h1`
  font-size: ${pxToRem(35)}rem;
  font-weight: 400;
  text-align: left;
`;

export const SignUpHeaderWrapper = styled.div`
  width: ${pxToRem(1270)}rem;
  margin-bottom: ${pxToRem(50)}rem;
  margin-top: ${pxToRem(90)}rem;
  padding-left: ${pxToRem(20)}rem;
  box-sizing: border-box;
`;

export const SignUpContent = styled.div`
  width: 100%;
  margin-bottom: ${pxToRem(30)}rem;
`;

export const SignUpItem = styled.div`
  width: 100%;
  > div {
    height: ${pxToRem(75)}rem;
    border-bottom: 1px solid ${COLOR.color_disable};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 40px;
    > p {
      font-size: 12px;
      > span {
        color: ${COLOR.color_main};
      }
    }
    > div {
      display: flex;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const SignUpItemText = styled.div`
  width: ${pxToRem(220)}rem;
  height: 100%;
  text-align: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignUpSubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${pxToRem(70)}rem;
`;
