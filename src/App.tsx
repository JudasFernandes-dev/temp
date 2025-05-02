import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import PagCadastro from "./assets/pages/PagCadastro";
import PagLogin from "./assets/pages/PagLogin";
import PagCadProjetos from "./assets/pages/PagCadProjetos";
import Empresa from "./assets/pages/Pagemp/Empresa";

import EditProfile from "./assets/components/perfil/EditProfile"; // Added import
import { ThemeProvider } from './contexts/ThemeContext'; // Added import
import Usuario from "./assets/pages/Paguser/Usuario"; // Added import


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-cadastro" element={<PagCadastro />} />
          <Route path="/login" element={<PagLogin />} />
          <Route path="/cadprojeto" element={<PagCadProjetos />} />
          
          <Route path="/pagempresa" element={<Empresa />} />
          <Route path="/paguser" element={<Usuario />} />
          {/* Rota /cadastro-empresa com chave única */}
          <Route
            path="/cadastro-empresa"
            element={<PagCadastro key="cadastro-empresa" />}
          />
          <Route
            path="/cadastro"
            element={<PagCadastro key="cadastro" />}
          />
          <Route path="/edit-profile" element={<EditProfile />} /> {/* Added route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;