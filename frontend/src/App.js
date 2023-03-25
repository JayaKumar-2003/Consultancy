
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SigninScreen from './Screens/SigninScreen';
import Dashboard from './Screens/Dashboard';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<SigninScreen></SigninScreen>}></Route>
          <Route path='/dashboard'element={<Dashboard></Dashboard>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
