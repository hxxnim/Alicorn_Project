import { useState, useEffect } from "react";
import * as S from "./style";
import Banner from "@/../components/common/banner";

const UserInfo = () => {
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    setIsFriend(true);
  }, []);

  return (
    <S.Wrapper>
      <S.UserInfo>
        <S.UserBannerLayout>
          <S.UserName>최예슬</S.UserName>
          <Banner isFriend={isFriend} />
        </S.UserBannerLayout>
        <S.UserRole>웹앱 UX 디자이너</S.UserRole>
      </S.UserInfo>
    </S.Wrapper>
  );
};

export default UserInfo;
