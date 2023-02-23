import './App.css';
import styled from 'styled-components';
import { WeatherCard } from './WeatherCard';

function App() {
  return (
    <div className="App">
      <Container>
        <WeatherCard />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: black;
`