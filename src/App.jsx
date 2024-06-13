import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegistrationForm } from "./pages/register"
import { UserList } from "./pages/list"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/usuario/criar" element={<RegistrationForm />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </Router>
  );
};
