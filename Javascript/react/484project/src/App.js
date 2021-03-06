import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './Site.css';
import Account from './Account';
import Login from './Login';
import SignUp from "./SignUp";
import NotFound from "./NotFound";
import Mongo from "./Mongo";
import HomePage from "./HomePage";
import RoommateQuiz from "./RoommateQuiz";
import QuizCompleted from "./QuizCompleted";
import ConfirmRoommateQuiz from "./ConfirmRoommateQuiz";
import Apartments from "./Apartments";
import About from "./About";



function App() {
  return (
    <div className={'router'}>
        <Router>
          <Routes>
            <Route path={"/"} element={<HomePage />}>
            </Route>
            <Route path={"/login/*"} element={<Login />}>
            </Route>
            <Route path={"/account/*"} element={<Account />}>
            </Route>
            <Route path={'/signup/*'} element={<SignUp />}>
            </Route>
            <Route path ={'/mongo/*'} element={<Mongo />}>
            </Route>
            <Route path ={'/confirmroommatequiz/*'} element={<ConfirmRoommateQuiz />}>
            </Route>
            <Route path ={'/roommatequiz/*'} element = {<RoommateQuiz />}>
            </Route>
            <Route path = {'/quizcompleted/*'} element = {<QuizCompleted />}>
            </Route>
            <Route path ={'/apartments/*'} element={<Apartments />}>
            </Route>
            <Route path={'/About/*'} element={<About />}>
            </Route>
            <Route path ={'*'} element={<NotFound />}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
