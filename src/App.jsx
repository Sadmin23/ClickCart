import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { useSelector } from 'react-redux';
import { signedIn } from './redux/user/userSlice';

export default function App() {

  const loggedIn = useSelector(signedIn)

  const ProtectedRoute = ({ element, path }) => {
    return (loggedIn) ? (
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