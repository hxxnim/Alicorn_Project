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
  name: string;
  access_token: string;
}
  
export interface refreshResponse {
  access_token: string;
}


export interface signupRequest {
  name: string;
  email: string;
  password: string;
}

export interface signupResponse {
  id: number;
  name?: string;
  email?: string;
  password?: string;
}

export interface searchPayload {
  name?: string;
}

export interface searchResponseItem {
  id?: number;
  name: string;
}

export interface searchResponse {
  users: searchResponseItem[];
}

export interface messagesItem {
  id: number;
  content: string; 
}

export interface getRoomListResponseItem {
  name: string;
  messages: messagesItem[];
}

export interface getRoomListResponse {
  rooms: getRoomListResponseItem[];
}