import styled from 'styled-components';

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 16px 16px;
  gap: 20px;
  background: #121212;
  align-self: stretch;
  border-radius:5px;
`;
const ActionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const TextContainer = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Action = () => {
  return <ActionContainer>
    <ActionItem>
       <img src="images/home.svg" alt="home-icon" />
      <TextContainer>Home</TextContainer>
    </ActionItem>
    <ActionItem>
       <img src="images/search.svg" alt="search-icon" />
       <TextContainer style={{color: "#B3B3B3"}}>Search</TextContainer>
    </ActionItem>
  </ActionContainer>;
};

export default Action;
