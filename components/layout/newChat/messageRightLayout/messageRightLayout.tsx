import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import socketIOClient from "socket.io-client";
import { getAccessToken } from "@/../utils/token";
import { useSockets } from "@/../core/context/socket.context";
import { useSearch } from "@/../utils/hooks/search";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserMappingResult from "./userMappingResult/userMappingResult";
import EVENTS from "@/../core/config/events";

const SOCKET_SERVER_URL = "52.79.53.22:3003";

const messageRightLayout = () => {
  const { socket, username, setUsername, roomId, rooms } = useSockets();
  const [inputValue, setInputValue] = useState<string>("");
  const searchState = useSearch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const usernameAndRoomRef = useRef(null);

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

  const handleSetUserNameAndCreateRoom = () => {
    const value = usernameAndRoomRef.current.value;
    if (!value) {
      return;
    }
    setUsername(value);

    localStorage.setItem("username", value);

    // get room 이름
    const roomName = usernameAndRoomRef.current.value || "";

    if (!String(roomName).trim()) return;

    // emit room 생성 event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    // set room 이름
    usernameAndRoomRef.current.value = "";
    setInputValue("");

    // join room
    // if (room_id === roomId) return;

    // socket.emit(EVENTS.CLIENT.JOIN_ROOM, room_id);
  };

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
              ref={usernameAndRoomRef}
              placeholder="이름 검색"
              autoComplete="off"
              onChange={changeNameHandler}
            />
          </div>
        </div>
      </S.Wrapper>
      <S.MappingWrapper>
        {inputValue
          ? searchState.state.searchUser.users.map((value, idx) => (
              <UserMappingResult
                key={`${idx}_user`}
                handleSetUserNameAndCreateRoom={handleSetUserNameAndCreateRoom}
                name={value.name}
              />
            ))
          : null}
      </S.MappingWrapper>
    </S.Container>
  );
};

export default messageRightLayout;
