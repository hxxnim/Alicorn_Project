import { useModal } from "../utils/hooks/common";
import Header from "../components/layout/header/header";
import NewMessage from "@/../components/layout/newChat";

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
