import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">Hello from react App.jsm developed by {props.name} 
    and his age is {props.age}.</div>
  );
}

export default App;
