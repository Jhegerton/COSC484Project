import logo from './images/keys.png';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Living Spaces</h1>
        <p>
          This is the empty shell that we will create our react.js app.
        </p>
        <div className={"route"}>
        <Router>
          <Routes>
            <Route exact path={"/"} element={<Home />}>
              <Home/>
            </Route>
            <Route exact path={"/login"} element={<Login />}>
              <Login/>
            </Route>
            <Route exact path={"/account"} element={<Account />}>
              <Account/>
            </Route>
            </Routes>
        </Router>
        </div>
      </header>
    </div>

  );
}

export default App;
