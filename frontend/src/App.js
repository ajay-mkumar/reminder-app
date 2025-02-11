import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import AboutScreen from './screens/AboutScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthScreen />} />
        <Route path='' element={<ProtectedRoute />} >
          <Route path='/home' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
