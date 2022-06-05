import { createAction } from "typesafe-actions";
import { error } from "@/../constance/error";

export const ACCESS_TOKEN = "auth/ACCESS_TOKEN";
export const IS_LOGIN = "auth/IS_LOGIN";

export const setAccessToken = createAction(ACCESS_TOKEN)<string>();
export const setIsLogin = createAction(IS_LOGIN)<boolean>();

type authActionType =
  | ReturnType<typeof setAccessToken>
  | ReturnType<typeof setIsLogin>;

interface AuthState {
  isLogin: boolean;
  accessToken: string;
  error: error;
}

const initState: AuthState = {
  isLogin:
    typeof window !== "undefined" && localStorage.getItem("access_token")
      ? true
      : false,
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
