import { useNavigate } from 'react-router-dom';
import LogoImg from '../assets/images/LogoImg.webp';
import styled from '@emotion/styled';

const Home = () => {
  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate('/order');
  };

  return (
    <StHome>
      <StMain>
        <StImage src={LogoImg} alt="로고 이미지" />
        <StButton onClick={navigateToOrder}>주문하러 가기</StButton>
      </StMain>
    </StHome>
  );
};

const StHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
`;

const StMain = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 41px;
  width: 100%;
`;

const StImage = styled.img`
  width: 150px;
  height: 51px;
`;

const StButton = styled.button`
  width: 172px;
  height: 88px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30.26px;
`;

export default Home;
