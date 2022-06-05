import { createAction } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga from "@/../utils/createRequestSaga";
import { searchUserApi } from "../api/search";
import { searchPayload, searchResponse } from "@/../constance/types";
import { error } from "@/../constance/error";

export const SEARCH = "search/SEARCH";
export const SEARCH_SUCCESS = "search/SEARCH_SUCCESS";
export const SEARCH_FAILURE = "search/SEARCH_FAILURE";

export const search = createAction(SEARCH)<searchPayload>();
export const searchSuccess = createAction(SEARCH_SUCCESS)<searchResponse>();
export const searchFailure = createAction(SEARCH_FAILURE)<error>();

export type searchActionType =
  | ReturnType<typeof search>
  | ReturnType<typeof searchSuccess>
  | ReturnType<typeof searchFailure>;

const getUserNameSaga = createRequestSaga(SEARCH, searchUserApi);

interface SearchState {
  searchUser: searchResponse;
  error: error;
}

const initialState: SearchState = {
  searchUser: {
    users: [],
  },
  error: {
    type: "",
    status: 0,
    message: "",
  },
};

export default function searchReducer(
  state: SearchState = initialState,
  action: searchActionType
) {
  switch (action.type) {
    case SEARCH_SUCCESS: {
      return {
        ...state,
        searchUser: {
          users: action.payload.users,
        },
      };
    }
    case SEARCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEARCH_FAILURE:
    default:
      return state;
  }
}

export function* searchSaga() {
  yield takeLatest(SEARCH, getUserNameSaga);
}