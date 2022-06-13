import Header from "@/../components/layout/header/header";
import Chat from "@/../components/layout/chat/chat";

const Message = ({ room_id }: { room_id: string }) => {
  return (
    <>
      <Header />
      <Chat room_id={room_id} />
    </>
  );
};

export default Message;
