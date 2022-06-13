import { COLOR } from "@/../styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 0 1.2rem;
  border-bottom: 1px solid ${COLOR.color_container_border};
`;

export const NotReadMessageAmount = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.color_message_head_text};
  font-weight: bold;
`;

export const NotReadMessage = styled.span`
  font-size: 14px;
`;

export const Amount = styled.span`
  font-size: 15px;
  margin-left: 2px;
`;