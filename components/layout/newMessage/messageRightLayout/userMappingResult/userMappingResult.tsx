import { useEffect } from "react";
import * as S from "./style";

interface Props {
  createNewSocketRoom: (inviter_id: number, inviter_name: string) => void;
  name: string;
  id: number;
}

const userMappingResult = ({ createNewSocketRoom, name, id }: Props) => {
  useEffect(() => {
    localStorage.setItem(
      "userDefaultProfile",
      "https://image.rocketpunch.com/images/user/user.png?s=80x80&t=cover"
    );
  }, []);

  return (
    <>
      <S.Container onClick={() => createNewSocketRoom(id, name)}>
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
