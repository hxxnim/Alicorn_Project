import Header from "@/../components/layout/header/header";
import Message from "@/../components/layout/message/message";

const message = () => {
  return (
    <>
      <Header />
      <Message chat_id={undefined} />
    </>
  );
};

export default message;
