import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import NavBar from './components/NavBar';
import Header from './components/Header';
import AddCustomers from './components/AddCustomers';
import ViewCustomers from './components/ViewCustomers';
import TransHistory from './components/TransHistory';
import Footer from './components/Footer';
import Transfer from './components/Transfer';
import About from './components/About';

function App() {
  return (
  <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
        <Route path="/components/About">
          <About/>
          </Route>
        <Route path="/components/AddCustomers">
          <AddCustomers/>
        </Route>
        <Route path="/components/Transfer">
          <Transfer/>
        </Route>
        <Route path="/components/ViewCustomers">
          <ViewCustomers/>
        </Route>
        <Route path="/components/TransHistory">
          <TransHistory/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
