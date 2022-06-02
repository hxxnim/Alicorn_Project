import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { perviewUserInfo, limitLength } from "@/../utils/previewUserInfo";

const MessageContactUser = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          {perviewUserInfo.map((value) => (
            <>
              <S.UserMessageInfo>
                <S.UserProfile>
                  <img
                    className="user_profile"
                    src={value.profile}
                    alt="userProfile"
                  />
                </S.UserProfile>
                <S.UserMessage>
                  <S.TopMessageInfo>
                    <span className="user_name">{value.name}</span>
                    <FontAwesomeIcon className="i" icon={faCircle} />
                    <span className="arrived_time">{value.time}</span>
                  </S.TopMessageInfo>
                  <S.BottomMessageInfo>
                    <span className="description">
                      {limitLength(value.description)}
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
