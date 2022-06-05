import SignupColumn from "./signupColumn";
import Input from "@/../components/common/modalInput/input";

interface Props {
  setName: (payload: string) => void;
}

const NameColumn = ({ setName }: Props) => {
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <SignupColumn text="이름">
      <Input
        width={308}
        margin="0px 7px 0px 0px"
        inputChangeHandler={nameChangeHandler}
      />
    </SignupColumn>
  );
};

export default NameColumn;
