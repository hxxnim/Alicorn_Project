import { getRequest, authorization } from "../default";
import { getAccessToken } from "@/../utils/token";
import { getRoomListResponse } from "@/../constance/types";
import uri from "@/../constance/uri";

export const getRoomListApi = async () => {
  const request = getRequest();
  return await request.get<getRoomListResponse>(uri.room_list, {
    headers: authorization(getAccessToken()),
  });
};
