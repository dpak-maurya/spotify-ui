import TrackItem from './TrackItem';
import tracksData from '../data/tracksData';
import styled from 'styled-components';

const FrameContainer = styled.div`
  display: flex;
  height: 158px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self:stretch;
  gap: 10px;
`;

const Heading = styled.h2`
  color: white;
  font-size: 32px;
  margin: 10px 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 346px);
  grid-gap: 10px;
`;


const RecentPlayedPlaylists = () => {
  return (
    <FrameContainer>
      <Heading>Good Evening</Heading>
      <GridContainer>
        {tracksData.map((track, index) => (
          <TrackItem key={index} title={track.title} imageUrl={track.imageUrl} />
        ))}
      </GridContainer>
    </FrameContainer>
  );
};

export default RecentPlayedPlaylists;
