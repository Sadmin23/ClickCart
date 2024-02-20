import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useSelector } from 'react-redux';

export default function App() {

  const loggedIn = useSelector(state => state.user);

  const ProtectedRoute = ({ element, path }) => {
    return (loggedIn.value) ? (
      element
    ) : (
      <Navigate to="/sign-in" replace state={{ from: path }} />
    );
  };
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} path={"/"}/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}