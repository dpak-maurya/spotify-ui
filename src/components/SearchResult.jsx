import SearchResultItem from './SearchResultItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
`;



const SearchResult = ({ items }) => (
  <SearchResultContainer>
    {items.map((item) => (
      <SearchResultItem
        key={item.id}
        image={item.imagePath}
        title={item.title}
        subtitle={item.subtitle}
      />
    ))}
  </SearchResultContainer>
);

SearchResult.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      imagePath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      // If you have additional properties, define them here
    })
  ).isRequired,
};

export default SearchResult;
