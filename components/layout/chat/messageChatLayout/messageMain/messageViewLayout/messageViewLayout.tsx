import { useEffect, useRef } from "react";
import * as S from "./style";
import { useSockets } from "@/../core/context/socket.context";

const MessageViewLayout = () => {
  const { messages } = useSockets();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <S.Container>
      <S.Wrapper>
        {messages.map(({ message, username, time }, index) => {
          return (
            <>
              <S.MessageContainer key={index}>
                <S.MessageWrapper key={index}>
                  <S.MessageInfo>
                    {username} - {time}
                  </S.MessageInfo>
                  <S.Message>{message}</S.Message>
                </S.MessageWrapper>
              </S.MessageContainer>
            </>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageViewLayout;
