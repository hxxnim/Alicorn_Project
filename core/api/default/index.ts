import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useModal } from '@/../utils/hooks/modal';

export const authorization = (token: string) => ({
  Authorization: `Bearer ${token}`,
  'Cache-Control': 'no-cache',
});

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://15.165.30.52:3003',
  });
  return request;
};

export const useIsLogin = () => {
  const router = useRouter();
  const setModalOn = useModal().setState.setModalOn;
  useEffect(() => {
    const ACCESS_TOKEN = localStorage.getItem('access_token');
    if (!ACCESS_TOKEN) {
      router.push('/');
      setModalOn('signin');
    }
  }, [history]);
};
