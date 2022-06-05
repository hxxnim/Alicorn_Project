import { useModal } from "@/../utils/hooks/modal";
import DeleteButton from "./deleteButton";
import LoginModal from "./login/loginModal";
import * as S from "./style";

const MODAL_TYPE = {
  loginModal: "signin",
};

const Modal = () => {
  const { state, setState } = useModal();

  const deleteModal = () => {
    setState.setModalOn("");
  };
  const modalClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <S.ModalWrapper onClick={deleteModal}>
        <S.Modal onClick={modalClickHandler}>
          <DeleteButton setType={setState.setModalOn} />
          {state.type === MODAL_TYPE.loginModal ? <LoginModal /> : ""}
        </S.Modal>
      </S.ModalWrapper>
    </>
  );
};

export default Modal;
