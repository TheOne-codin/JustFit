import './App.css';
import Header from './components/header/header.js';
import MainFive from './components/mainFive/MainFive';
import MainFour from './components/mainFour/MainFour';
import MainOne from './components/mainone/MainOne';
import MainSix from './components/mainSix/MainSix';
import MainThree from './components/mainThree/MainThree';
import MainTwo from './components/mainTwo/MainTwo';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainOne/>
      <MainTwo/>
      <MainThree/>
      <MainFour/>
      <MainFive/>
      <MainSix/>
    </div>
  );
}

export default App;
