import * as S from "./style";
import NotReadMessage from "./notReadMessage/notReadMessage";
import MessageNavigation from "./messageNavigation";

const MessageLeftLayout = () => {
  return (
    <S.Container>
      <S.HeaderWrapper>
        <NotReadMessage />
        <S.Divider />
      </S.HeaderWrapper>
      <MessageNavigation />
    </S.Container>
  );
};

export default MessageLeftLayout;
