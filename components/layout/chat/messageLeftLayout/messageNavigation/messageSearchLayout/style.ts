import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 14%;
  border-top: 1px solid ${COLOR.color_container_border};
  border-right: 1px solid ${COLOR.color_container_border};
  border-bottom: 1px solid ${COLOR.color_container_border};
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .item {
    height: 100%;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    vertical-align: middle;
    line-height: 1;
    user-select: none;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;

    .search {
      display: flex;
      align-items: center;
      border: 1px solid ${COLOR.color_input};
      border-radius: 50px;
      width: 65%;
      height: 40px;
      font-size: 1em;
      padding: 0 2rem;

      .i {
        pointer-events: none;
        right: auto;
        left: 1px;
        border-radius: 0.28571429rem 0 0 0.28571429rem;
        cursor: default;
        line-height: 1;
        text-align: center;
        height: 100%;
        width: 16px;
        opacity: 0.5;
        border-radius: 0 0.28571429rem 0.28571429rem 0;
        -webkit-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
        font-size: 1em;
      }
    }

    .prompt {
      padding-left: 1.5em !important;
      padding-right: 0 !important;
      border-color: transparent !important;
      background-color: transparent !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      margin: 0;
      max-width: 100%;
      -webkit-box-flex: 1;
      -ms-flex: 1 0 auto;
      flex: 1 0 auto;
      outline: 0;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      text-align: left;
      line-height: 1.21428571em;
      background: #fff;
      border: 1px solid #d9dfeb;
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 0.1s ease, border-color 0.1s ease;

      &::placeholder {
        color: ${COLOR.color_input};
      }
    }
  }
`;
