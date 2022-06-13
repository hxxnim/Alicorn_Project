import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 6px;
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,0.03);
    color: rgba(0,0,0,0.95);
  }
`;

export const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 74px;
  display: flex;
  align-items: center;
  text-align: left;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 8px;
  
  .user_profile {
    display: inline-block;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 500rem;
  }
`;

export const UserName = styled.span`
  flex: 1;
  margin-left: 12px;
  font-size: 15px;
`;
