import './App.css';
import MainContainer from './components/MainContainer';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  width: 1512px;
  height: 982px;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
`;


function App() {
  return (
    <AppContainer>
      <Sidebar/>
      <MainContainer/>
    </AppContainer>
  );
}

export default App;
