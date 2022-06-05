import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelectState } from '../common';
import {
  refreshToken,
  setEmail,
  setPassword,
  signin,
  reset
} from '@/../core/redux/signin';
import { IS_LOGIN } from '@/../core/redux/auth';
import { signinRequest } from '@/../constance/types';

const useSignin = () => {
  const dispatch = useDispatch();
  const signinState = useSelectState().signin;
  useEffect(() => {
    if (signinState.error.type) dispatch({ type: IS_LOGIN, payload: false });
  }, [signinState.error]);
  const setState = {
    setId: (payload: string) => {
      dispatch(setEmail(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    signin: (payload: signinRequest) => {
      dispatch(signin(payload));
    },
    refreshToken: (callback: () => void) => {
      dispatch(refreshToken({ callback }));
    },
    reset: () => {
      dispatch(reset());
    },
  };
  return {
    state: signinState,
    setState,
  };
};

export default useSignin;