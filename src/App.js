import logo from "./logo.svg";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="topnav" id="myTopnav">
          <Link to='/' className="active">
            Home
          </Link>
          <Link to='/news'>News</Link>
        </div>
      </header>

      <Routes>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
