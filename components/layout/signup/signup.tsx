import * as S from "./style";
import { Button } from "@/../components/layout/../common/button";
import { error } from "@/../constance/error";
import SignUpForm from "./form";

interface SignupProps {
  name: string;
  email: string;
  password: string;
  setName: (payload: string) => void;
  setEmail: (payload: string) => void;
  setPassword: (payload: string) => void;
  signup: (payload: { name: string; email: string; password: string }) => void;
  error?: error;
}

const signup = ({
  name,
  email,
  password,
  setName,
  setEmail,
  setPassword,
  signup,
}: SignupProps) => {
  const signupButtonClickHandler = () => {
    signup({ name, email, password });
  };
  return (
    <S.SignUp>
      <S.SignUpHeaderWrapper>
        <S.SignUpTitle>회원 가입</S.SignUpTitle>
      </S.SignUpHeaderWrapper>
      <SignUpForm
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      <S.SignUpSubmitButtonWrapper>
        <Button
          className="create-account__btn"
          onClick={signupButtonClickHandler}
        >
          계정 생성
        </Button>
      </S.SignUpSubmitButtonWrapper>
    </S.SignUp>
  );
};

export default signup;
