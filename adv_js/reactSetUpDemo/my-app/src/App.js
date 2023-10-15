import logo from './logo.svg';
import './App.css';
import UserGroup from "./components/UserGroup"
import Color from "./components/Color"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
        <Nav />
        <UserGroup />
    </div>
  );
}

export default App;
