
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SigninScreen from './Screens/SigninScreen';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/Signin' element={<SigninScreen></SigninScreen>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
