import { createAction } from "typesafe-actions";
import { takeEvery } from "redux-saga/effects";
import { error } from "@/../constance/error";
import { getRoomListApi } from "../api/chat";
import { getRoomListResponse } from "@/../constance/types";
import createRequestSaga from "@/../utils/createRequestSaga";

const GET_ROOM_LIST = 'chat/GET_ROOM_LIST';
const GET_ROOM_LIST_SUCCESS = 'chat/GET_ROOM_LIST_SUCCESS';
const GET_ROOM_LIST_FAILURE = 'chat/GET_ROOM_LIST_FAILURE';

export const getRoomList = createAction(GET_ROOM_LIST)();
export const getRoomListSuccess = createAction(GET_ROOM_LIST_SUCCESS)<getRoomListResponse>();
export const getRoomListFailure = createAction(GET_ROOM_LIST_FAILURE)<error>();

type chatActionType =
  | ReturnType<typeof getRoomList>
  | ReturnType<typeof getRoomListSuccess>
  | ReturnType<typeof getRoomListFailure>;

export const getRoomListSaga = createRequestSaga(GET_ROOM_LIST, getRoomListApi);

interface ChatState {
  roomList: getRoomListResponse;
  error: error;
}

const initialState: ChatState = {
  roomList: {
    rooms: []
  },
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

export default function chatReducer(
  state: ChatState = initialState,
  action: chatActionType
) {
  switch (action.type) {
    case GET_ROOM_LIST_SUCCESS:
      return {
        ...state,
        roomList: {
          rooms: action.payload.rooms
        }
      };
    case GET_ROOM_LIST_FAILURE: 
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export function* chatSaga() {
  yield takeEvery(GET_ROOM_LIST, getRoomListSaga)
}
