import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Installation from './Page/Installation/Installation';
import Main from './Page/Main/Main';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Turkish from './Page/Turkish/Turkish';
import Turkishtest from './Page/Turkishtest/Turkish';
import Russian from './Page/Russian/Russian';
import Contacts from './Page/Contacts/Contacts';
import Finnish from './Page/Finnish/Finnish';


function App() {



  const base = '/:locale(en|ru|lt)?';
  return (
    <div className="App">
      <Nav/>
      {/* <ScrollToTop/> */}
      <Switch>
      <Route  exact path={base}>
            <Main />
        </Route>
        <Route  path={`${base}/Installation`}>
            <Installation />
        </Route>
        <Route  path={`${base}/Turkish`}>
            <Turkish />
        </Route>
        <Route path={`${base}/Finnish`}>
            <Finnish />
        </Route>
        <Route path={`${base}/Russian`}>
            <Russian/>
        </Route>
        <Route path={`${base}/Contacts`}>
            <Contacts/>
        </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
