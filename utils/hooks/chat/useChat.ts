import { useDispatch } from "react-redux";
import { useSelectState } from "../common";
import { getRoomList } from "@/../core/redux/chat";

const useChat = () => {
  const dispatch = useDispatch();
  const state = useSelectState().chat;
  const setState = {
    getRoomList: () => {
      dispatch(getRoomList());
    },
  };
  return {
    state,
    setState,
  };
};

export default useChat;
