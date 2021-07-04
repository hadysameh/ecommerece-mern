import logo from './logo.svg';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import './App.css';
import routes from './router/routes'
import Header from './component/Header'
function App() {
  return (
    routes
    // <Router>
    //   <Header></Header>
    //   <Switch>
    //     <Route exact path='/'>

    //       home
    //       <div className="App">
    //         <header className="App-header">
    //           <img src={logo} className="App-logo" alt="logo" />
    //           <p>
    //             Edit <code>src/App.js</code> and save to reload.
    //           </p>
    //           <a
    //             className="App-link"
    //             href="https://reactjs.org"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Learn React
    //           </a>
    //         </header>
    //       </div>
    //     </Route>
    //     <Route path='/about'>
    //       about
    //     </Route>
    //   </Switch>
    // </Router>
    );
}

export default App;
