import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                {/**Rutas publicas */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/**Rutas Privadas */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/**Not found */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
