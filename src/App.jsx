import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/Register/RegisterForm";
import { UserList } from "./pages/List/UserList";
import { EditUserForm } from "./pages/Update/EditUserForm";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/usuario/editar/:id" element={<EditUserForm />} />
        <Route path="/usuario/criar" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};
