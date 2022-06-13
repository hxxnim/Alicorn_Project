import { useState, useEffect } from "react";
import * as S from "./style";
import { useSockets } from "@/../core/context/socket.context";
import Banner from "@/../components/common/banner";

const UserInfo = () => {
  const [isFriend, setIsFriend] = useState(false);
  const { socket, messages, roomId, username } = useSockets();

  useEffect(() => {
    setIsFriend(true);
  }, []);

  return (
    <S.Wrapper>
      <S.UserInfo>
        <S.UserBannerLayout>
          <S.UserName>{username}</S.UserName>
          <Banner isFriend={isFriend} />
        </S.UserBannerLayout>
        <S.UserRole>웹앱 UX 디자이너</S.UserRole>
      </S.UserInfo>
    </S.Wrapper>
  );
};

export default UserInfo;
