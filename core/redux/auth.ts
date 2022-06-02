import { createAction } from "typesafe-actions";
import { error } from "@/../constance/error";

export const ACCESS_TOKEN = "auth/ACCESS_TOKEN" as const;
export const IS_LOGIN = "auth/IS_LOGIN" as const;

export const setAccessToken = createAction(ACCESS_TOKEN)<string>();
export const setIsLogin = createAction(IS_LOGIN)<boolean>();

export type authActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setIsLogin>;

interface AuthState {
  accessToken: string;
  isLogin: boolean;
  error: error;
}

const initState: AuthState = {
  isLogin: localStorage.getItem("access_token") ? true : false,
  accessToken: "",
  error: {
    status: 0,
    message: "",
    type: "",
  },
};

export default function authReducer(
  state: AuthState = initState,
  action: authActionType
) {
  switch (action.type) {
    case ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    case IS_LOGIN: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
