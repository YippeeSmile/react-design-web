//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import './pages/index.scss';
//import Homecity from './pages/projects/Homecity';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
