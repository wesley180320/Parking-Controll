import Carro from "../img/Graphicloads-Colorful-Long-Shadow-Car.ico"
import "./Home.css"
const Home = () => {


    return (

        <div className="container-fluid d-flex justify-content-center container">
            <img src={Carro} alt="Carro" />
            <div className="constainer-fluid texto">
                <p className="parking"> Parking <span>Controll</span></p>
                <p className="parking">Sistema de Controle de Estacionamento para Veículos.</p>
            </div>
        </div>
    );

}


export default Home;