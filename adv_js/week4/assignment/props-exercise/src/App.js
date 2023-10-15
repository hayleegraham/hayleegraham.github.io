import './App.css';
import Header from './components/Header'
import ThemeDemo from './components/ThemeDemo';
import UserInfo from './components/UserInfo';


function App() {
  const userName = "Haylee"
  return (
    <div className="App">
      <Header userName= {userName} UserInfo = {UserInfo}/>
      
    </div>
  );
}

export default App;
