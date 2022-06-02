import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 1px 2px 0 rgb(40 50 60 / 6%);
  margin: 0;
  z-index: 1000;
  position: fixed;
  top: 0;
  right: auto;
  bottom: auto;
  width: 100%;
  border-radius: 0;
  height: 50px;
  display: flex;
  background: #fff;
  font-weight: 400;
  border: 1px solid #d9dfeb;
  min-height: 2.42em;
`;

export const Wrapper = styled.div`
  width: 1092px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: inherit;
  flex-direction: inherit;
  -webkit-box-align: inherit;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;

export const MainLogo = styled.div`
  display: inherit;

  a {
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    align-items: center;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    text-decoration: none;
    flex: 0 0 auto;
    user-select: none;
    padding: 0 1.14285714em;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
      color: rgba(0, 0, 0, 0.95);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background: rgba(34, 36, 38, 0.1);
    }

    img {
      display: inline-block;
      vertical-align: middle;
      margin: -0.3em 0;
      width: 32px;
      height: 32px;
    }
  }

  .item {
    align-items: center;
    display: flex;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    flex: 0 0 auto;
    user-select: none;
    padding: 0 1.14285714em;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;

    .search {
      font-size: 1em;
      position: relative;
      align-items: center;
      display: flex;
    }

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

    .prompt {
      padding-left: 1em !important;
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
      background: #fff;
      border: 1px solid #d9dfeb;
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 0.1s ease, border-color 0.1s ease;

      &::placeholder {
        color: ${COLOR.color_container_border};
      }
    }
  }
`;

export const MainMenu = styled.div`
  display: flex;
  margin-left: auto !important;
  margin: 0;

  a {
    display: flex;
    padding: 0.71em 12px;
    text-transform: none;
    align-items: center;
    color: #28323c;
    font-weight: 400;
    font-size: 14px;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
      color: rgba(0, 0, 0, 0.95);
      cursor: pointer;
    }
  }

  .main-divider {
    white-space: nowrap;
    height: auto;
    text-align: center;
    font-size: 1rem;
    margin: 14px 10px;
    border-right: 1px solid #d9dfeb;
    padding: 0;

    &::before {
      position: absolute;
      top: 0;
      right: auto;
      left: 0;
      height: 100%;
      width: 1px;
    }
  }

  #main-menu-dropdown {
    padding: 0.71em 12px;
    align-items: center;
    display: flex;
    cursor: pointer;
    color: inherit;
    align-items: center;
    display: flex;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    flex: 0 0 auto;
    user-select: none;
    padding: 0 1.14285714em;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;

    .text {
      font-size: 14px;
      margin-right: 6px;
    }

    .i {
      opacity: 0.9;
      float: none;
      margin: 0;
      width: 12px;
      height: 1em;
      text-align: center;
      -webkit-font-smoothing: antialiased;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 1px;
      background: rgba(34, 36, 38, 0.1);
    }
  }

  .ui {
    padding-left: 8px;
    padding-right: 8px;
  }

  .right {
    display: flex;
    margin-left: auto !important;
  }

  .item {
    align-items: center;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    flex: 0 0 auto;
    user-select: none;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;

    &:hover {
      background: rgba(0, 0, 0, 0.03);
      color: rgba(0, 0, 0, 0.95);
      cursor: pointer;
    }
  }

  .message-icon {
    width: 20px;
    height: 20px;
  }

  .notification-icon {
    width: 20px;
    height: 20px;
  }

  #user-dropdown {
    .user_profile {
      display: inline-block;
      width: 2em;
      height: 2em;
      border-radius: 500rem;
      margin-right: 8px;
    }

    .text {
      display: inline-block;
      transition: none;
      font-size: 14px;
    }

    .i {
      margin-left: 6px;
      width: 0.3rem;
    }
  }
`;

