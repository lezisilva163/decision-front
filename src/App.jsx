import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./pages/Register/RegisterForm";
import { UserList } from "./pages/List/UserList";
import { EditUserForm } from "./pages/Update/EditUserForm";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./styles/theme/default";

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/usuario/criar" element={<RegistrationForm />} />
          <Route path="/usuario/editar/:id" element={<EditUserForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
