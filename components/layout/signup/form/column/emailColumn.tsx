import SignupColumn from "./signupColumn";
import Input from "@/../components/common/modalInput/input";

interface Props {
  setEmail: (payload: string) => void;
}

const EmailColumn = ({ setEmail }: Props) => {
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <SignupColumn text="이메일">
      <Input
        width={308}
        margin="0px 7px 0px 0px"
        inputChangeHandler={emailChangeHandler}
      />
    </SignupColumn>
  );
};

export default EmailColumn;
