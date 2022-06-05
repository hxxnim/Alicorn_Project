import styled from "styled-components";

export const SigninBox = styled.div`
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

  a {
    font-size: 12px;
    padding: 7px 12px;
    line-height: 1.5;
    background: #fff !important;
    color: #28323c !important;
    font-weight: 400;
    border-radius: 0.28571429rem;
    text-transform: none;
    text-shadow: none !important;
    box-shadow: inset 0 0 0 1px #bbc5d8;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    text-align: center;
    text-decoration: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease, 0.1s ease;

    &:hover {
      color: #4e61ff !important;
      box-shadow: inset 0 0 0 1px #4e61ff, inset 0 0 0 0 #d9dfeb;
    }

    &:last-child {
      margin-left: 8px !important;
      background-color: #4e61ff !important;
      color: #fff !important;
      box-shadow: none;
      text-shadow: none !important;
      background-image: none !important;
      cursor: pointer;
      display: inline-block;
      min-height: 1em;
      outline: 0;
      border: none;
      vertical-align: baseline;
      background: #eff2f7;
      text-transform: none;
      font-weight: 400;
      text-align: center;
      text-decoration: none;
      border-radius: 0.28571429rem;
      transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
        box-shadow 0.1s ease, 0.1s ease;
    }
    &:last-child:hover {
      background-color: #344aff !important;
      color: #fff !important;
      text-shadow: none !important;
    }
  }
`;

export const ProfileMenu = styled.div`
  height: 100%;
  display: flex;
  margin-left: auto !important;
  margin: 0;

  .ui {
    padding-left: 8px;
    padding-right: 8px;
  }

  .right {
    display: flex;
    margin-left: auto !important;
  }

  .item {
    height: 100%;
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
    width: 18px;
    height: 20px;
  }

  .notification-icon {
    width: 20px;
    height: 22px;
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
