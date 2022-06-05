import Header from "../components/layout/header/header";
import { useModal } from "../utils/hooks/common";
import NewMessage from "@/../components/layout/newMessage";

export default function Page() {
  const Modal = useModal();
  return (
    <>
      <Header />
      {Modal}
      <NewMessage />
    </>
  );
}
