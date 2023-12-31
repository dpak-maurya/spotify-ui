import styled from 'styled-components';
import Action from './Action';
import Library from './Library';

const Container= styled.div`
  display: flex;
  width: 383px;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 10px;
  gap: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
        <Action/>
        <Library/>
    </Container>
  )
}

export default Sidebar