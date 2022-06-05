import { useDispatch } from "react-redux";
import { useSelectState } from "../common";
import { search } from "@/../core/redux/search";
import { searchPayload } from "@/../constance/types";

const useSearch = () => {
  const dispatch = useDispatch();
  const state = useSelectState().search;
  const setState = {
    search: (payload: searchPayload) =>
      {dispatch(search(payload))},
  };

  return { 
    state, 
    setState
  }
};

export default useSearch;
