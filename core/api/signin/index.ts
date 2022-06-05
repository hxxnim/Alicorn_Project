import uri from '@/../constance/uri';
import { signinRequest } from '@/../constance/types';
import { refreshResponse, signinResponse } from '@/../constance/types'
import { getRequest } from '../default';

export const signinApi = async (body: signinRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<signinResponse>(uri.signin, body);
    localStorage.setItem('user_name', response.data.name)
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshTokenApi = async () => {
  try {
    const request = getRequest();
    const { data } = await request.put<refreshResponse>(
      uri.signin,
      {},
      {
        headers: {
          'x-refresh-token': localStorage.getItem('refresh_token'),
        },
      },
    );
    localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    throw error;
  }
};
