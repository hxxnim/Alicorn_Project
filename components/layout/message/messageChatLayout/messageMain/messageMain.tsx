import styled from "styled-components";
import MessageViewLayout from "./messageViewLayout/messageViewLayout";
import MessageSearchLayout from "./messageSendLayout/messageSendLayout";

const MessageMain = () => {
  return (
    <Container>
      <MessageViewLayout />
      <MessageSearchLayout />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
  flex-direction: column;
`;

export default MessageMain;
