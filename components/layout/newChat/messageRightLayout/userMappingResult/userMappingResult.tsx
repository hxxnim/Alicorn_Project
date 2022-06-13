import { useEffect } from "react";
import * as S from "./style";

interface Props {
  handleSetUserNameAndCreateRoom: () => void;
  name: string;
}

const userMappingResult = ({ handleSetUserNameAndCreateRoom, name }: Props) => {
  useEffect(() => {
    localStorage.setItem(
      "userDefaultProfile",
      "https://image.rocketpunch.com/images/user/user.png?s=80x80&t=cover"
    );
  }, []);

  return (
    <>
      <S.Container onClick={handleSetUserNameAndCreateRoom}>
        <S.Wrapper>
          <S.UserProfile>
            <img
              className="user_profile"
              src={localStorage.getItem("userDefaultProfile")}
              alt="userProfile"
            />
          </S.UserProfile>
          <S.UserName>{name}</S.UserName>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default userMappingResult;
