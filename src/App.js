import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import About from './Page/About/About';
import Installation from './Page/Installation/Installation';
import Main from './Page/Main/Main';
import Turkish from './Page/Turkish/Turkish';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';


function App() {



  const base = '/:locale(en|ru|lt)?';
  return (
    <div className="App">
      <Nav/>
      {/* <ScrollToTop/> */}
      <Switch>
      <Route exact path={base}>
            <Main />
        </Route>
        <Route path={`${base}/Installation`}>
            <Installation />
        </Route>
        <Route path={`${base}/Turkish`}>
            <Turkish />
        </Route>
        </Switch>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
