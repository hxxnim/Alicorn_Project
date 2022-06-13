import { useRef } from "react";
import * as S from "./style";
import { useSockets } from "@/../core/context/socket.context";
import EVENTS from "@/../core/config/events";
import { Button } from "@/../components/common/button";

const MessageSearchLayout = () => {
  const { socket, messages, roomId, username, setMessages } = useSockets();
  const newMessageRef = useRef(null);

  const handleSendMessage = () => {
    const message = newMessageRef.current.value;

    if (!String(message).trim()) {
      return;
    }

    socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, { roomId, message, username });

    const date = new Date();

    setMessages([
      ...messages,
      {
        username: "You",
        message,
        time: `${date.getHours()}:${date.getMinutes()}`,
      },
    ]);

    newMessageRef.current.value = "";
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.WriteMessageInput>
          <textarea
            id="textarea"
            className="write-text"
            placeholder="내용 작성해 주세요."
            ref={newMessageRef}
            cols={90}
            rows={4}
            autoComplete="off"
          />
        </S.WriteMessageInput>
        <S.SendMessageButton>
          <Button className="send-message__btn" onClick={handleSendMessage}>
            보내기
          </Button>
        </S.SendMessageButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageSearchLayout;
