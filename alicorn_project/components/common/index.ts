import { COLOR } from '@/../styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
  &.search-contact__btn {   
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.75rem;
    width: 138px;
    height: 44px;
    background-color: ${COLOR.color_blue_strong};
    border: 1px solid ${COLOR.color_blue_strong};
    border-radius: 30px;
    color: ${COLOR.color_default_background};
    font-size: 14px;
    font-weight: 500;
    transition: opacity .1s ease,
    background-color .1s ease,color .1s ease;

    &:hover {
      background-color: #344aff;
      border: 1px solid #344aff;
    }
  }
  &.send-message__btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.75rem;
    width: 74px;
    height: 28px;
    background-color: ${COLOR.color_blue_strong};
    border: 1px solid ${COLOR.color_blue_strong};
    border-radius: 30px;
    color: ${COLOR.color_default_background};
    font-size: 14px;
    font-weight: 500;
    transition: opacity .1s ease,
    background-color .1s ease,color .1s ease;

    &:hover {
      background-color: #344aff;
      border: 1px solid #344aff;
    }
  }
  &.load-message__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    width: 100%;
    height: 100%;
    background-color: ${COLOR.color_default_background};
    border: none;
    outline: none;
    color: ${COLOR.color_blue_weak};
    font-size: 14px;
    font-weight: 500;
    transition: opacity .1s ease,
    background-color .1s ease,color .1s ease;
    
    &:hover {
      color: ${COLOR.color_blue_strong};
    }
  }
`;