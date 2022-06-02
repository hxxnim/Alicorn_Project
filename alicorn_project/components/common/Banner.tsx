import styled from "styled-components";
import { COLOR } from "@/../styles/theme";

interface InitalBannerProps {
  isFriend: boolean;
}

const Banner = ({ isFriend }: InitalBannerProps) => {
  return <>{isFriend ? <BannerWrapper>친구</BannerWrapper> : <span></span>}</>;
};

const BannerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 0.75rem;
  width: 18px;
  height: 20px;
  background-color: ${COLOR.color_neon_blue};
  border: 1px solid ${COLOR.color_neon_blue};
  border-radius: 30px;
  color: ${COLOR.color_default_background};
  font-size: 11px;
  margin-left: 8px;
  font-weight: 500;
  cursor: default;
`;

export default Banner;
