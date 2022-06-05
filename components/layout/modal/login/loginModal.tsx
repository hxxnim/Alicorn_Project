import { useEffect } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { Button } from "@/../components/common/button";
import Input from "@/../components/common/modalInput/input";
import PasswordInput from "@/../components/common/modalInput/passwordInput";
import { useSignin } from "@/../utils/hooks/signin";
import { useModal } from "@/../utils/hooks/modal";
import { SIGNIN } from "@/../core/redux/signin";

const LoginModal = () => {
  const router = useRouter();
  const { setState, state } = useSignin();
  const modalState = useModal();

  const signupButtonClickHandler = () => {
    modalState.setState.setModalOff("signin");
    router.push("/signup");
  };

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };

  const loginButtonClickHandler = () => {
    setState.signin({
      email: state.email,
      password: state.password,
    });
  };

  const keyPressHandler = (event: React.KeyboardEvent<Element>) => {
    if (event.key === "Enter") {
      loginButtonClickHandler();
    }
  };

  useEffect(() => {
    return () => {
      setState.reset();
    };
  }, []);

  return (
    <S.ModalMain>
      <S.ModalTitle>로그인</S.ModalTitle>
      <S.ModalErrorText>
        {state.error.type === SIGNIN ? "로그인 정보를 확인해 주세요." : ""}
      </S.ModalErrorText>
      <Input
        inputChangeHandler={idChangeHandler}
        width={280}
        height={48}
        margin="0px 0px 15px 0px"
        placeholder="이메일"
        keypressHandler={keyPressHandler}
      />
      <PasswordInput
        inputChangeHandler={passwordChangeHandler}
        width={280}
        height={48}
        margin="0px 0px 30px 0px"
        placeholder="비밀번호"
        keypressHandler={keyPressHandler}
      />
      <S.ModalDefaultButtonWrapper>
        <Button className="login__btn" onClick={loginButtonClickHandler}>
          로그인
        </Button>
      </S.ModalDefaultButtonWrapper>
      <S.ModalSubButton onClick={signupButtonClickHandler}>
        아직 계정이 없으신가요?
      </S.ModalSubButton>
    </S.ModalMain>
  );
};

export default LoginModal;
