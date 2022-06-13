import styled from "styled-components";
import { useSockets } from "@/../core/context/socket.context";
import MessageViewLayout from "./messageViewLayout/messageViewLayout";
import MessageSendLayout from "./messageSendLayout/messageSendLayout";

const MessageMain = () => {
  return (
    <Container>
      <MessageViewLayout />
      <MessageSendLayout />
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
