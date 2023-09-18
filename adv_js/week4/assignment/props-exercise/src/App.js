import './App.css';
import Header from './components/Header'
import UserInfo from './components/UserInfo';

function App() {
  const userName = "Haylee"
  return (
    <div className="App">
      <Header userName= {userName} UserInfo = {<UserInfo userName={userName}/>}/>
      
    </div>
  );
}

export default App;
