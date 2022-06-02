export interface responseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export interface signinRequest {
  email: string;
  password: string;
}

export interface signinResponse {
  access_token: string;
  refresh_token: string;
}
  
export interface refreshResponse {
  access_token: string;
}

export interface getUserNamePayload {
  name: string;
}