import styled from 'styled-components';
import {
  AddIcon,
  FilterMenuIcon,
  MenuIcon,
  RightArrowIcon,
  SearchBarIcon,
} from './Icons';
import SearchResult  from './SearchResult';
import searchResultData from '../data/searchResultData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const LibraryWrapper = styled.div`
  display: flex;
  height: 56px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 10px 10px 0px 0px;
  background: #121212;
`;

const LibraryMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  color: #b3b3b3;
`;
const LibraryTitle = styled.div`
  color: #b3b3b3;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LibraryAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

const CategoryWrapper = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  align-items: center;
  align-self: stretch;
  background: #121212;
`;

const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  overflow-x: auto;
  /* Hiding the scrollbar for Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hiding the scrollbar for Firefox */
  scrollbar-width: none;

  /* Hiding the scrollbar for Internet Explorer and Edge */
  -ms-overflow-style: none;
`;
const CategoryItem = styled.div`
  display: inline-flex;
  height: 24px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.25);
  display: inline-flex;

`;
const CategoryText = styled.span`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SearchCollections = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background: #121212;
  height: calc(100vh - 250px); 
  overflow-y: scroll;
`;

const SearchActions = styled.div`
  display: flex;
  height: 40px;
  gap: 10px;
  padding: 8px 16px;
  align-self:stretch;
  justify-content: space-between;
  align-items: center;
  background: #121212;
`;

const FilterOptions = styled.div`
  display: flex;
  column-gap: 10px;
  flex-shrink: 0;
  align-items: center;
`;

const FilterLabel = styled.span`
  color: #b3b3b3;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Library = () => {
  return (
    <Container>
      <LibraryWrapper>
        <LibraryMenu>
          <MenuIcon />
          <LibraryTitle>Library Menu</LibraryTitle>
        </LibraryMenu>
        <LibraryAction>
          <AddIcon />
          <RightArrowIcon />
        </LibraryAction>
      </LibraryWrapper>
      <CategoryWrapper>
        <CategoryContainer>
          <CategoryItem>
            <CategoryText>Playlists</CategoryText>
          </CategoryItem>
          <CategoryItem>
            <CategoryText>Artists</CategoryText>
          </CategoryItem>
          <CategoryItem>
            <CategoryText>Albums</CategoryText>
          </CategoryItem>
          <CategoryItem>
            <CategoryText>Podcosts & Shows</CategoryText>
          </CategoryItem>
          <CategoryItem>
            <CategoryText>Downloaded</CategoryText>
          </CategoryItem>
        </CategoryContainer>
      </CategoryWrapper>
      <SearchCollections>
        <SearchActions>
          <SearchBarIcon />
          <FilterOptions>
            <FilterLabel>Recents</FilterLabel>
            <FilterMenuIcon />
          </FilterOptions>
        </SearchActions>
        <SearchResult items={searchResultData}/>
      </SearchCollections>
    </Container>
  );
};

export default Library;
