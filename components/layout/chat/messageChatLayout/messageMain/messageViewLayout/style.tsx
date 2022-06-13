import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  flex: 8;
  padding: 1.4rem;
  overflow-y: scroll;

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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  margin-bottom: 12px;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageInfo = styled.span`
  font-weight: bold;
`;

export const Message = styled.span``;
