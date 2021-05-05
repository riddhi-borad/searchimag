import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from './Components/searchresult';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Search}></Route>
      </Router>
    </div>
  )
}

export default App;
