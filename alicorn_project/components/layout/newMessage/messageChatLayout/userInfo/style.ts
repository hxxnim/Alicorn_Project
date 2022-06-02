import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0 2rem;
  border-bottom: 1px solid ${COLOR.color_container_border};
  box-shadow: 0 1.5px 0 0 rgb(40 50 60 / 20%);
`;

export const UserInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserBannerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const UserName = styled.span`
  color: ${COLOR.color_message_head_text};
  font-weight: 500;
  font-size: 18px;
`;

export const UserRole = styled.span`
  color: ${COLOR.color_blue_weak};
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
`;
