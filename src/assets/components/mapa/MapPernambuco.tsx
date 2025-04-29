import { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mapPernambuco.css";


interface Endereco {
  rua: string;
  numero: string;
  cidade: string;
  estado: string;
  latitude: number;
  longitude: number;
}

interface Empresa {
  id: number;
  nome: string;
  endereco: Endereco;
}

const MapPernambuco = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  const centerPosition = [-8.0476, -34.877]; // Recife

  // Função para buscar empresas do servidor
  const buscarEmpresas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/empresas"); // URL do JSON Server
      setEmpresas(response.data); // Armazena as empresas no estado
    } catch (error) {
      console.error("Erro ao buscar empresas:", error);
    }
  };

  // useEffect para buscar empresas ao montar o componente
  useEffect(() => {
    buscarEmpresas();
  }, []);


  return (
    <section className="map-section">
      <h1>Encontre nossos parceiros</h1>
      <div className="map-wrapper">
        {/* Mapa à esquerda */}
        <div className="map-container">
         <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={false}
        className="map-container"
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Renderizando marcadores dinamicamente */}
        {empresas.map((empresa) => (
          <Marker
            key={empresa.id}
            position={[empresa.endereco.latitude, empresa.endereco.longitude]}
          >
            <Popup>
              <strong>{empresa.nome}</strong>
              <br />
              {empresa.endereco.rua}, {empresa.endereco.numero}
              <br />
              {empresa.endereco.cidade} - {empresa.endereco.estado}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
        </div>

        {/* Texto explicativo à direita */}
        <div className="map-text">
          <h2>Como funciona?</h2>
          <p>
            Quando você cadastra sua empresa, ela automaticamente será exibida 
            no mapa, permitindo que outras pessoas a encontrem com facilidade. 
            Essa funcionalidade ajuda a conectar empresas locais e a promover 
            parcerias estratégicas entre instituições.
          </p>
          {/* <p>
            Cadastre-se agora mesmo e faça parte da nossa rede de parceiros em Pernambuco!
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default MapPernambuco;

