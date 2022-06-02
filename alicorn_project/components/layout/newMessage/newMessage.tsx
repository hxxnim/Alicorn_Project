import * as S from "./style";
import MessageLeftLayout from "./messageLeftLayout/messageLefttLayout";
import MessageRightLayout from "./messageRightLayout/messageRightLayout";

const Message = ({ chat_id }: { chat_id?: number }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <MessageLeftLayout />
        <MessageRightLayout />
      </S.Wrapper>
    </S.Container>
  );
};

export default Message;
