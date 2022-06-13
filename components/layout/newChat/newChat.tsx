import { useEffect, useState } from "react";
import * as S from "./style";
import socketIOClient from "socket.io-client";
import { useAuth } from "@/../utils/hooks/auth";
import { useModal } from "@/../utils/hooks/modal";
import { useChat } from "@/../utils/hooks/chat";
import MessageLeftLayout from "./messageLeftLayout/messageLefttLayout";
import MessageRightLayout from "./messageRightLayout/messageRightLayout";

const SOCKET_SERVER_URL = "52.79.53.22:3003";

const Message = () => {
  const authState = useAuth();
  const modalState = useModal();

  useEffect(() => {
    if (!authState.state.isLogin) {
      alert("로그인 후 이용 해주세요.");
      modalState.setState.setModalOn("signin");
    } else {
      modalState.setState.setModalOn("");
    }
  }, [authState.state.isLogin]);

  return (
    <S.Container>
      <S.Wrapper>
        <MessageLeftLayout />
        <MessageRightLayout />
      </S.Wrapper>
    </S.Container>
  );
};

export default Message;
