import styled from 'styled-components';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1 0 0;
  background: linear-gradient(
    231deg,
    #2f2727 5.48%,
    #0f0f1e 52.45%,
    #070606 97.5%
  );
  align-self:stretch;
  position:relative;
`;

const MainContainer = () => {
  return (
    <Container>
      <Navbar />
      <MainContent/>
    </Container>
  );
};

export default MainContainer;
