import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  padding: 0 1.4rem 1.8rem 1.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${COLOR.color_message_border};
`;

export const WriteMessageInput = styled.div`
  display: flex;
  justify-content: center;
  flex: 3;

  .write-text {
    width: 100%;
    padding: 1rem 1rem 0.4rem 1rem;
    resize: none;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 0.1s ease, border-color 0.1s ease;

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
    &::placeholder {
      color: ${COLOR.color_input};
    }
  }
`;

export const SendMessageButton = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 0;
  padding-right: 1rem !important;
  border-top: 1px solid ${COLOR.color_message_border};
  background-color: #f9fafc;
`;
