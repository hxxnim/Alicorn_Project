export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const clearStorage = () => {
  localStorage.clear();
};
  