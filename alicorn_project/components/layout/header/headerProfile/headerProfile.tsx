import { FC } from "react";
import * as S from "./style";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageOutline from "@/../assets/message-outline.png";
import Notification from "@/../assets/notification.png";

interface Props {
  isLogin: boolean;
  buttonName: string;
  setIsLogin: (val: boolean) => void;
}

const HeaderProfile: FC<Props> = ({ isLogin, buttonName, setIsLogin }) => {
  const signinHandler = () => {
    setIsLogin(true);
    alert("로그인!");
  };

  const signoutHandler = () => {
    setIsLogin(false);
    alert("로그아웃!");
  };

  return (
    <>
      {!isLogin ? (
        <S.SigninBox>
          <a onClick={signinHandler}>{buttonName}</a>
          <a>{buttonName.includes("무료") ? "무료 가입" : "무료 가입"}</a>
        </S.SigninBox>
      ) : (
        <S.ProfileMenu>
          <div className="ui right item">
            <img
              className="message-icon"
              src={MessageOutline.src}
              alt="Message"
            />
          </div>
          <div className="ui right item">
            <img
              className="notification-icon"
              src={Notification.src}
              alt="Notification"
            />
          </div>
          <div
            id="user-dropdown"
            className="ui right item"
            onClick={signoutHandler}
          >
            <img
              className="user_profile"
              src="https://image.rocketpunch.com/images/user/user.png?s=80x80&t=cover"
              alt="default_profile"
            />
            <span className="text">전규현</span>
            <FontAwesomeIcon icon={faCaretDown} className="i" />
          </div>
        </S.ProfileMenu>
      )}
    </>
  );
};

export default HeaderProfile;
