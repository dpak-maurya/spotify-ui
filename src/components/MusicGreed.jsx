// Import styled from styled-components
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    margin:0;
    margin-top:10px;
`;

// Define a container for the header with "Made for deepak" and "Show All"
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self:stretch;
`;


// Define a Grid Container
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(200px, 1fr));
  grid-template-rows:auto;
  grid-gap: 10px;
`;

// Define a Grid Item
const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 185px;
  padding: 8px;
  background: #101010;
  border-radius: 10px;
`;

// Define the title and subtitle
const Title = styled.h2`
  // Add your styles for the title
  margin:5px 0px;
`;

const Subtitle = styled.p`
  color: #B3B3B3;
  margin:0;
`;

const Link = styled.a`
    color: #B3B3B3;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    
    &:hover{
        text-decoration:underline;
    }
`;

// Define the image component
const Image = styled.img`
  width: 100%; // Make the image fill the container
  border-radius: 10px; // Adjust based on your design
`;

// Define your component
const MusicGrid = ({ items }) => {
    return (
      <Wrapper>
        <HeaderContainer>
          <Title>Made For deepak</Title>
          <Link>Show All</Link>
        </HeaderContainer>
        <GridContainer>
          {items.map(item => (
            <GridItem key={item.id}>
              <Image src={item.imagePath} alt={item.title} />
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
            </GridItem>
          ))}
        </GridContainer>
      </Wrapper>
    );
  };


  MusicGrid.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        imagePath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  export default MusicGrid;