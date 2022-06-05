import SignupColumn from "./signupColumn";
import PasswordInput from "@/../components/common/modalInput/passwordInput";

interface Props {
  setPassword: (payload: string) => void;
}

const PasswordColumn = ({ setPassword }: Props) => {
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <SignupColumn text="비밀번호">
      <PasswordInput
        width={308}
        margin="0px 7px 0px 0px"
        inputChangeHandler={passwordChangeHandler}
      />
    </SignupColumn>
  );
};

export default PasswordColumn;
