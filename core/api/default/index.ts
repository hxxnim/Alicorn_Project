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
    baseURL: 'http://52.79.53.22:3003',
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
