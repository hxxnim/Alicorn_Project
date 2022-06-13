import { COLOR } from '@/../styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 74%;
  border-right: 1px solid ${COLOR.color_message_border};
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
		width: 2px;
		background: none;
	}
	&::-webkit-scrollbar-thumb {
	  background: ${COLOR.color_scroll};
    border-radius: 6px;
	}
	&::-webkit-scrollbar-track {
	  background: none;
	}
`;

export const Wrapper = styled.div`
  height: 100%;
`;

export const UserMessageInfo = styled.div`
  display: flex;
  align-items: center;
  height: 14.1298458%;
  border-bottom: 1px solid ${COLOR.color_message_border};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    .user_name {
      color: ${COLOR.color_contact_user_hover}
    }
    .description {
      color: ${COLOR.color_contact_user_hover}
    }
  }
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  
  .user_profile {
    display: inline-block;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 500rem;
  }
`;

export const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

export const TopMessageInfo = styled.div`
  display: flex;
  align-items: center;
  .i {
    margin: 0 8px;
    width: 4px;
    color: ${COLOR.color_container_border}
  }
  .user_name {
    color: #616161;
    font-weight: bold;
    font-size: 14px;
  }
  .arrived_time {
    color: ${COLOR.color_message_text};
    font-size: 11px;
  }
`;

export const BottomMessageInfo = styled.div`
  display: flex;
  justify-content: flex-start;

  .description {
    color: #757575;
    font-size: 12px;
  }
`;
