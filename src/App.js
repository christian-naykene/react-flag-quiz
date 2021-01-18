import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro numberOfQuestions={5} startGame={shout}/>
    </div>
  );
}

function shout() {
  alert("I'm starting the game!");
}

export default App;
