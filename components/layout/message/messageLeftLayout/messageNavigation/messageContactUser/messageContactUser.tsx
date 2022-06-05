import * as S from "./style";
import { useChat } from "@/../utils/hooks/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { messageLengthLimit } from "@/../utils/messageLengthLimit";

const MessageContactUser = () => {
  const { state, setState } = useChat();

  return (
    <>
      <S.Container>
        <S.Wrapper>
          {state.roomList.rooms.map((value) => (
            <>
              <S.UserMessageInfo>
                <S.UserProfile>
                  <img
                    className="user_profile"
                    src="https://image.rocketpunch.com/images/user/user.png?s=80x80&t=cover"
                    alt="userProfile"
                  />
                </S.UserProfile>
                <S.UserMessage>
                  <S.TopMessageInfo>
                    <span className="user_name">{value.name}</span>
                    <FontAwesomeIcon className="i" icon={faCircle} />
                    <span className="arrived_time"></span>
                  </S.TopMessageInfo>
                  <S.BottomMessageInfo>
                    <span className="description">
                      {value.messages
                        .slice(-1)
                        .map((msg) => messageLengthLimit(msg.content))}
                    </span>
                  </S.BottomMessageInfo>
                </S.UserMessage>
              </S.UserMessageInfo>
            </>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default MessageContactUser;
