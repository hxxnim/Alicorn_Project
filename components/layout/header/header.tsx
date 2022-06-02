import * as S from "./style";
import React, { useState } from "react";
import HeaderProfile from "./headerProfile/headerProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { categoryMenu, buttonMenu } from "@/../utils/menuList";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.MainLogo>
            <a>
              <img
                src="https://static.rocketpunch.com/images/rocketpunch_logo.svg"
                alt="RocketPunch"
              />
            </a>
            <div className="item">
              <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="i" />
                <input
                  type="text"
                  className="prompt"
                  size={30}
                  placeholder="통합 검색"
                  autoComplete="off"
                />
              </div>
            </div>
          </S.MainLogo>
          <S.MainMenu>
            {categoryMenu.map((value) => (
              <a key={`${value.name}_menu`}>{value.name}</a>
            ))}
            <div className="main-divider" />
            <div id="main-menu-dropdown">
              <span className="text">더보기</span>
              <FontAwesomeIcon icon={faChevronDown} className="i" />
            </div>
            <div className="divider item">
              <div className="ui vertical" />
            </div>
            {buttonMenu.map((value) => (
              <HeaderProfile
                key={`${value.name}_buttonMenu`}
                buttonName={value.name}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
              />
            ))}
          </S.MainMenu>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default Header;
