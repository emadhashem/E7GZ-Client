import { Route, Routes } from "react-router-dom";
import "./App.css";
import { RoleContext } from "./context/role/rolecontext";
import RoleContextProvider from "./context/role/RoleContextProvider";
import Layout from "./layout/Layout";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";

function App() {
  return (
    <RoleContextProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </RoleContextProvider>
  );
}

export default App;
