import React from "react";
import * as S from "../../style";

interface Props {
  text: string;
  children: React.ReactNode;
}

const SignUpColumn = ({ children, text }: Props) => {
  return (
    <S.SignUpItem>
      <div>
        <div>
          <S.SignUpItemText>{text}</S.SignUpItemText>
          {children}
        </div>
      </div>
    </S.SignUpItem>
  );
};

export default SignUpColumn;
