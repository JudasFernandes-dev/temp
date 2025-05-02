import Header from "../../assets/components/header/Header";
import Card from "../components/card-inicial/Card";
import Banner from './../components/banner/banner';
// import CardComentarios from "../components/card-comentarios/Card-comentarios";
import Footer from "../components/footer/Footer";
import MapPernambuco from "../components/mapa/MapPernambuco";
import Cardcadastro from "../components/cardcadastro/Cardcadastro";
import Roteiro from '../components/roteiro/Roteiro';
import Carousel from '../components/carrossel/Carousel';



function Home() {

 
  
    
    return (
        <>
            <Header/>
            <Banner/>
            <Carousel/>   
        <main>
        
            <Card/>
            <Roteiro />
            <Cardcadastro/>
            <MapPernambuco/>
            {/* <CardComentarios/> */}

        </main>  

            <Footer/>
        </>
    )
}

export default Home;