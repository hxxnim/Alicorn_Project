import * as S from "../style";

interface Props {
  setType: (type: string) => void;
}

const DeleteButton = ({ setType }: Props) => {
  const buttonClickHandler = () => {
    setType("");
  };
  return (
    <S.ModalDeleteButtonWrapper>
      <S.ModalDeleteButton onClick={buttonClickHandler}>
        <div />
        <div />
      </S.ModalDeleteButton>
    </S.ModalDeleteButtonWrapper>
  );
};

export default DeleteButton;
