import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Ebook from './component/Ebook/Ebook';
import Facilities from './component/Facilities/Facilities';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Student from './component/Student/Student';
import Teachers from './component/Teachers/Teachers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/facilities">
            <Facilities></Facilities>
          </Route>
          <Route path="/student">
            <Student></Student>
          </Route>
          <Route path="/teacher">
            <Teachers></Teachers>
          </Route>
          <Route path="/ebooks">
            <Ebook></Ebook>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
