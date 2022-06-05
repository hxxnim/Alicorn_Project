import { useEffect, useState } from "react";
import * as S from "./style";
import socketIOClient from "socket.io-client";
import { useAuth } from "@/../utils/hooks/auth";
import { useModal } from "@/../utils/hooks/modal";
import { useChat } from "@/../utils/hooks/chat";
import MessageLeftLayout from "./messageLeftLayout/messageLefttLayout";
import MessageChatLayout from "./messageChatLayout/messageChatLayout";

const SOCKET_SERVER_URL = "15.165.30.52:3003";

const Message = ({ chat_id }: { chat_id?: number }) => {
  const [socket, setSocket] = useState<any>(null);
  const authState = useAuth();
  const modalState = useModal();
  const chatState = useChat();

  useEffect(() => {
    if (!authState.state.isLogin) {
      alert("로그인 후 이용 해주세요.");
      modalState.setState.setModalOn("signin");
    }
    modalState.setState.setModalOn("");
  }, [authState.state.isLogin]);

  useEffect(() => {
    chatState.setState.getRoomList();
    console.log(chatState.state.roomList);
  }, []);

  useEffect(() => {
    const socket = socketIOClient.connect(SOCKET_SERVER_URL);
    if (socket) {
      socket.on("cr_room", (room_id: number) => {
        // chat_id === room_id;
      });
    }
  }, [socket]);

  useEffect(() => {
    const Socket = socketIOClient.connect(SOCKET_SERVER_URL);
    setSocket(Socket);

    return () => {
      Socket.disconnect();
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <MessageLeftLayout />
        <MessageChatLayout />
      </S.Wrapper>
    </S.Container>
  );
};

export default Message;
