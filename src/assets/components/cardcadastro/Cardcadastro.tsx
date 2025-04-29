import './cardcadastro.css'; 
import layoutcadastro from '../../img/layout-cadastroo.svg'; 
// import { useNavigate } from 'react-router-dom'; 
import Button from "../buttons/Buttons"; 

/**
 * Componente funcional que renderiza dois cards para cadastro, um para empresas e outro para instituições.
 * Cada card contém uma imagem, um título e um botão que redireciona para uma rota específica.
 */


const Cardcadastro: React.FC = () => {
  
  return (
    <div className="container-cadastro">
      <div className="frase-cadastro">
        <h2>Realize seu cadastro</h2>
      </div>
      <div className="card-container">
        {/* Card para empresas */}
        <div className="card-cadastro">
          <div className="layout-cadastro">
            <img src={layoutcadastro} alt="Layout" />
          </div>
          <div className="empresa-instituicao-botao">
            <h1>Empresa</h1>
            {/* Botão que navega para a rota de cadastro de empresas */}
            <Button
              stylebutton="secundary-button marge-botton"
              text="Clique Aqui"
            />
          </div>
        </div>

        {/* Card para instituições */}
        <div className="card-cadastro">
          <div className="layout-cadastro">
            <img src={layoutcadastro} alt="Layout" />
          </div>
          <div className="empresa-instituicao-botao">
            <h1>Instituição</h1>
            {/* Botão que navega para a rota de cadastro de instituições */}
            <Button
              stylebutton="secundary-button marge-botton"
              text="Clique Aqui"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Cardcadastro;
