import logo from './logo.svg';
import NavBar from './components/NavBar'
import CountriesList from './components/CountriesList'
import { Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CountriesList />
      {/* <Switch>
        <Route exact path='/' />
      </Switch> */}

    </div>
  );
}

export default App;
