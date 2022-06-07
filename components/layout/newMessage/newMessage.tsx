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
  const [socket, setSocket] = useState<any>(null);
  const [chatId, setChatId] = useState<number>(null);
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

  // 소켓 연결 시 호출
  useEffect(() => {
    if (socket) {
      socket.on("cr_room", (room_id: number) => {
        setChatId(room_id);
      });
    }
  }, [socket]);

  // 소켓 연결
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
        <MessageRightLayout socket={socket} chatId={chatId} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Message;
