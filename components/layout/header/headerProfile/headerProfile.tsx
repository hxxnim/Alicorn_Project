import * as S from "./style";
import Link from "next/link";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message_outline, notification } from "@/../assets/header";
import { clearStorage } from "@/../utils/token";

interface Props {
  isLogin: boolean;
  buttonName: string;
  buttonClickHandler: () => void;
}

const HeaderProfile = ({ isLogin, buttonName, buttonClickHandler }: Props) => {
  const signinHandler = () => {
    buttonClickHandler();
  };

  const signoutHandler = () => {
    window.confirm("로그아웃 하시겠습니까?") ? clearStorage() : null;
    window.location.reload();
  };

  return (
    <>
      {!isLogin ? (
        <S.SigninBox>
          <a onClick={signinHandler}>{buttonName}</a>
          <Link href="/signup">
            <a>{buttonName.includes("무료") ? "무료 가입" : "무료 가입"}</a>
          </Link>
        </S.SigninBox>
      ) : (
        <S.ProfileMenu>
          <div className="ui right item">
            <img
              className="message-icon"
              src={message_outline.src}
              alt="Message"
            />
          </div>
          <div className="ui right item">
            <img
              className="notification-icon"
              src={notification.src}
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
            <span className="text">{localStorage.getItem("user_name")}</span>
            <FontAwesomeIcon icon={faCaretDown} className="i" />
          </div>
        </S.ProfileMenu>
      )}
    </>
  );
};

export default HeaderProfile;
