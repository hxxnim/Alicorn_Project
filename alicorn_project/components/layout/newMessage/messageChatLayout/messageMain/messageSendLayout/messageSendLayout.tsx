import * as S from "./style";
import { Button } from "@/../components/common";

const MessageSearchLayout = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WriteMessageInput>
          <textarea
            id="textarea"
            className="write-text"
            placeholder="내용 작성해 주세요."
            cols={90}
            rows={4}
            autoComplete="off"
          />
        </S.WriteMessageInput>
        <S.SendMessageButton>
          <Button className="send-message__btn">보내기</Button>
        </S.SendMessageButton>
      </S.Wrapper>
    </S.Container>
  );
};

export default MessageSearchLayout;
