import "./empresa.css"
import Projetosemp from "../../components/conteudos/Projetosemp";
import PerfilLateralemp from "../../components/perfil/Perfilemp";

const App = () => {
  return (
    <div className="main-container-principal">
      <PerfilLateralemp />
      <Projetosemp />
    </div>
  );
};

export default App;
