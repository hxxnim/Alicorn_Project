import * as S from "./style";
import MessageLeftLayout from "./messageLeftLayout/messageLefttLayout";
import MessageRightLayout from "./messageRightLayout/messageRightLayout";
import MessageChatLayout from "./messageChatLayout/messageChatLayout";

const Message = ({ chat_id }: { chat_id?: number }) => {
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
