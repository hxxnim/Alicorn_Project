import { getRequest } from "../default";
import { searchResponse, searchPayload } from "@/../constance/types";
import uri from "@/../constance/uri";

export const searchUserApi = async (
  access_token: string,
  payload: searchPayload
) => {
  const request = getRequest();
  return await request.get<searchResponse>(uri.search, {
    params: payload,
  });
};
