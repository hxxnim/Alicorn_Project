import * as S from "./style";
import UserInfo from "./userInfo/userInfo";
import MessageMain from "./messageMain";

const MessageChatLayout = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <UserInfo />
      </S.HeaderWrapper>
      <MessageMain />
    </S.Container>
  );
};

export default MessageChatLayout;
