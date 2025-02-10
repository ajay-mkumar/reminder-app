import './App.css';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='' element={<ProtectedRoute />} >
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
