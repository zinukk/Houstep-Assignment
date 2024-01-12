import styled from '@emotion/styled';

const Home = () => {
  return <StHome>변경사항</StHome>;
};

const StHome = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
`;

export default Home;
