import './App.css';
import Home from './Pages/Home';
import { members } from './List';
import { Route, Switch } from 'react-router-dom'
import Company from './Pages/company';
import Costumer from './Pages/costumer';

function App() {
  
  return (
    <div className="App">
      <div className="App-header">
      <Switch>

        <Route exact path='/'>
          <Home members={members}/>
        </Route>

        <Route path='/costumer/:id'>
          <Costumer members={members}/>
        </Route>

        <Route path='/company/:id'>
          <Company members={members}/>
        </Route>

      </Switch>
      </div>
    </div>
  );
}

export default App;
