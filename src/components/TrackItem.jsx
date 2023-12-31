import styled from 'styled-components';

const TrackItemContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.16);
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
`;

const Title = styled.div`
  color: white;
  text-align:center;
`;

// eslint-disable-next-line react/prop-types
const TrackItem = ({ title, imageUrl }) => {
  return (
    <TrackItemContainer>
      <Image alt={title} src={imageUrl} />
      <Title>{title}</Title>
    </TrackItemContainer>
  );
};

export default TrackItem;
