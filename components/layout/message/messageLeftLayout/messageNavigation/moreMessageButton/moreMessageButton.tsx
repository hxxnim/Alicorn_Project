import * as S from "./style";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/../components/common/button";

const MoreMessageButton = () => {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <Button className="load-message__btn">
            이전 대화 불러오기
            <FontAwesomeIcon icon={faChevronDown} className="i" />
          </Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default MoreMessageButton;
