import React from "react";
import * as S from "../style";
import { NameColumn, EmailColumn, PasswordColumn } from "./column";

interface SignupProps {
  setName: (payload: string) => void;
  setEmail: (payload: string) => void;
  setPassword: (payload: string) => void;
}

const SignupForm = ({ setName, setEmail, setPassword }: SignupProps) => {
  return (
    <S.SignUpContent>
      <NameColumn setName={setName} />
      <EmailColumn setEmail={setEmail} />
      <PasswordColumn setPassword={setPassword} />
    </S.SignUpContent>
  );
};

export default SignupForm;
