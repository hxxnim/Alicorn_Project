import { COLOR } from '@/../styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  margin-top: 32px;

  .contact-user {
    margin-bottom: 4px;
    color: ${COLOR.color_message_head_text}
  }
  
  .item {
    border: 1px solid ${COLOR.color_input};
    border-radius: 4px;
    height: 38px;
    align-items: center;
    display: flex;
    position: relative;
    vertical-align: middle;
    line-height: 1;
    flex: 0 0 auto;
    user-select: none;
    padding: 0 0.46em;
    background: 0 0;
    text-transform: none;
    color: #28323c;
    font-weight: 400;

    .search {
      font-size: 1em;
      position: relative;
      align-items: center;
      display: flex;
      width: 100%;
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

export const MappingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
  flex: 1;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
		width: 2px;
		background: none;
	}
	&::-webkit-scrollbar-thumb {
	  background: ${COLOR.color_scroll};
    border-radius: 6px;
	}
	&::-webkit-scrollbar-track {
	  background: none;
	}
`;