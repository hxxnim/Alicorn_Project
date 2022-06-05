import uri from "../../../constance/uri";
import { signupRequest, signupResponse } from "@/../constance/types";
import { getRequest } from "../default";

export const signupApi = async (_: any, body: signupRequest) => {
  const request = getRequest();
  const response = await request.post<signupResponse>(uri.signup, body);
  return response;
};
