import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MessageSearchLayout = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <div className="item">
            <div className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="i" />
              <input
                className="prompt"
                type="text"
                size={30}
                placeholder="대화 검색하기"
                autoComplete="off"
              />
            </div>
          </div>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default MessageSearchLayout;
