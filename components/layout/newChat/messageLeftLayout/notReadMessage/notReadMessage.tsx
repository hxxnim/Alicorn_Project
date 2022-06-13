import * as S from "./style";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/../components/common/button";

const NotReadMessage = () => {
  return (
    <S.Wrapper>
      <S.NotReadMessageAmount>
        <S.NotReadMessage>안읽은 대화</S.NotReadMessage>
        <S.Amount>(1)</S.Amount>
      </S.NotReadMessageAmount>
      <Link href="/">
        <Button className="search-contact__btn">
          <FontAwesomeIcon icon={faPlus} />
          새로운 메세지
        </Button>
      </Link>
    </S.Wrapper>
  );
};

export default NotReadMessage;
