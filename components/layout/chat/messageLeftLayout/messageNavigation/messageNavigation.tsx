import styled from "styled-components";
import MessageSearchLayout from "./messageSearchLayout/messageSearchLayout";
import MessageContactUser from "./messageContactUser/messageContactUser";
import MoreMessageButton from "./moreMessageButton/moreMessageButton";

const MessageNavigation = () => {
  return (
    <Wrapper>
      <MessageSearchLayout />
      <MessageContactUser />
      <MoreMessageButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 86%;
`;

export default MessageNavigation;
