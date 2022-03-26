import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
  
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Game">
          <Game />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
