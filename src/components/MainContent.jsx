import styled from 'styled-components';
import RecentPlayedPlaylists from './RecentPlayedPlaylists';
import MusicGrid from './MusicGreed';
import musicData from '../data/musicData';

const VerticalContainer = styled.main`
  display: flex;
  flex-direction:column;
  padding: 0px 24px;
  align-items: flex-start;
  gap: 10px;
  margin-top:55px;
  flex: 1 0 0;
  overflow:auto;
`;

const MainContent = () => {
  return (
    <VerticalContainer>
      <RecentPlayedPlaylists />
      <MusicGrid items={musicData}/>
      <MusicGrid items={musicData}/>
      <MusicGrid items={musicData}/>
      <MusicGrid items={musicData}/>
      <MusicGrid items={musicData}/>
      <MusicGrid items={musicData}/>
    </VerticalContainer>
  );
};

export default MainContent;
