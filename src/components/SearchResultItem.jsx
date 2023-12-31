
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff; /* replace with actual color */
  margin: 5px 0;
`;

const Image = styled.img`
  width: 56px; /* replace with actual size */
  height: 56px; /* replace with actual size */
  margin-right: 10px;
  border-radius: 2px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  margin: 0;
  /* other styles as needed */
`;

const Subtitle = styled.p`
  margin: 0;
  /* other styles as needed */
`;

// eslint-disable-next-line react/prop-types
const SearchResultItem = ({ image, title, subtitle }) => (
  <ItemContainer>
    <Image src={image} alt={title} />
    <TextContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TextContainer>
  </ItemContainer>
);

export default SearchResultItem;
