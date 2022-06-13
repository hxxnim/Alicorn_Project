import { useEffect } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { messageLengthLimit } from "@/../utils/messageLengthLimit";
import { useSockets } from "@/../core/context/socket.context";
import EVENTS from "@/../core/config/events";

const MessageContactUser = () => {
  const { rooms, messages, roomId, socket } = useSockets();
  const route = useRouter();

  const handleClickJoinRoom = (key: string) => {
    route.push(`/message/${key}`);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {Object.keys(rooms).map((key) => {
          return (
            <S.UserMessageInfo
              key={key}
              onClick={() => handleClickJoinRoom(key)}
            >
              <S.UserProfile>
                <img
                  className="user_profile"
                  src="https://image.rocketpunch.com/images/user/user.png?s=80x80&t=cover"
                  alt="userProfile"
                />
              </S.UserProfile>
              <S.UserMessage>
                <S.TopMessageInfo>
                  <span className="user_name">{rooms[key].name}</span>
                  <FontAwesomeIcon className="i" icon={faCircle} />
                  <span className="arrived_time"></span>
                </S.TopMessageInfo>
                <S.BottomMessageInfo>
                  <span className="description">
                    {messages
                      .map(({ message }) => {
                        return message;
                      })
                      .slice(-1)
                      .map((msg) => messageLengthLimit(msg))}
                  </span>
                </S.BottomMessageInfo>
              </S.UserMessage>
            </S.UserMessageInfo>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageContactUser;
