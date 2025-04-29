import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import PagCadastro from "./assets/pages/PagCadastro";
import PagLogin from "./assets/pages/PagLogin";
import PagCadProjetos from "./assets/pages/PagCadProjetos";
import Empresa from "./assets/pages/Pagemp/Empresa";
import Usuario from "./assets/pages/Paguser/Usuario";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-cadastro" element={<PagCadastro />} />
          <Route path="/login" element={<PagLogin />} />
          <Route path="/cadprojeto" element={<PagCadProjetos />} />
          <Route path="/paguser" element={<Usuario />} />
          <Route path="/pagempresa" element={<Empresa />} />
          {/* Rota /cadastro-empresa com chave única */}
          <Route
            path="/cadastro-empresa"
            element={<PagCadastro key="cadastro-empresa" />}
          />
          <Route
            path="/cadastro"
            element={<PagCadastro key="cadastro" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
