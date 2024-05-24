import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersList from "./pages/Users";
import UsuarioForm from "./pages/UsuarioForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { UserContextProvider } from "./context/UserProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <br/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get" element={<UsersList />} />
        <Route path="/new" element={<UsuarioForm />} />
        <Route path="/edit/:id" element={<UsuarioForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br/>
      <About />
    </UserContextProvider>
  );
}

export default App;