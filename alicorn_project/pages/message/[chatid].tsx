import Message from "@/../components/layout/message/message";
import { GetServerSidePropsContext } from "next";

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: { chat_id: context.query.chatid },
  };
}

const message = ({ chat_id }: { chat_id: number }) => {
  return <Message chat_id={chat_id} />;
};

export default message;
