import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Main from './Page/Main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path={"/"} exact>
            <Main />
        </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
