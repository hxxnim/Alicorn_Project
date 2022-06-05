import Header from "@/../components/layout/header/header";
import Message from "@/../components/layout/message/message";
import { GetServerSidePropsContext } from "next";

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { chat_id: context.query.roomid },
  };
}

const message = ({ chat_id }: { chat_id: number }) => {
  return (
    <>
      <Header />
      <Message chat_id={chat_id} />
    </>
  );
};

export default message;
