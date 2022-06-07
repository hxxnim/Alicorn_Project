import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import socketIOClient from "socket.io-client";
import { getAccessToken } from "@/../utils/token";
import { useSearch } from "@/../utils/hooks/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMappingResult from "./userMappingResult/userMappingResult";

const SOCKET_SERVER_URL = "52.79.53.22:3003";

interface Props {
  socket: any;
  chatId: number;
}

const messageRightLayout = ({ socket, chatId }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const searchState = useSearch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const route = useRouter();

  const Search = useCallback(async () => {
    const response = await searchState.setState.search({ name: inputValue });

    return response;
  }, [inputValue, searchState.setState]);

  const changeNameHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value;
      setInputValue(name);
      searchState.setState.search({ name });
    },
    [searchState.setState.search]
  );

  // 소켓 방
  const createNewSocketRoom = useCallback(
    (inviter_id: number, inviter_name: string) => {
      const Socket = socketIOClient.connect(SOCKET_SERVER_URL);
      const access_token = getAccessToken();
      const creator_name = localStorage.getItem("user_name");

      Socket.emit("cr_room", {
        access_token: access_token,
        creator_name: creator_name,
        inviter_id: inviter_id,
        inviter_name: inviter_name,
      });
      route.push("/message" + `/${chatId}`);
    },
    []
  );

  useEffect(() => {
    if (inputValue.length > 0) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      timeoutRef.current = setTimeout(Search, 100);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [inputValue]);

  return (
    <S.Container>
      <S.Wrapper>
        <span className="contact-user">대화 상대</span>
        <div className="item">
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="i" />
            <input
              type="text"
              className="prompt"
              placeholder="이름 검색"
              autoComplete="off"
              onChange={changeNameHandler}
            />
          </div>
        </div>
      </S.Wrapper>
      <S.MappingWrapper>
        {inputValue
          ? searchState.state.searchUser.users.map((value) => {
              return (
                <>
                  <UserMappingResult
                    key={value.id}
                    createNewSocketRoom={createNewSocketRoom}
                    name={value.name}
                    id={value.id}
                  />
                </>
              );
            })
          : null}
      </S.MappingWrapper>
    </S.Container>
  );
};

export default messageRightLayout;
