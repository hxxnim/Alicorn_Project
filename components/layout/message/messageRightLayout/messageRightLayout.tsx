import * as S from "./style";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const messageRightLayout = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <span>대화 상대</span>
        <div className="item">
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="i" />
            <input
              type="text"
              className="prompt"
              size={30}
              placeholder="이름 검색"
              autoComplete="off"
            />
          </div>
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default messageRightLayout;
