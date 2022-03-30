import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Account from './Account';
import Login from './Login';
import Home from "./Home";


function App() {
  return (
    <div className={'router'}>

        <Router>
          <Routes>
            <Route path={"/"} element={<Home />}>
              {/*<Home/>*/}
            </Route>
            <Route path={"/login"} element={<Login />}>
              {/*<Login/>*/}
            </Route>
            <Route path={"/account"} element={<Account />}>
              {/*<Account/>*/}
            </Route>
            </Routes>
        </Router>

    </div>

  );
}

export default App;
