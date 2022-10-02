import carro from "../img/Orange_Enzo_Ferrari_(7191948164).jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark {styles.navbar} ">
    
    <div className="container-fluid">
    <p> Parking Controll</p> <br />
    <p className="sistema">Sistema de Controle de Estacionamento para Veículos.</p>
        <nav>
        <a href="" className="link btn btn-outline-danger "> Cadastrar </a>
        <a href=""  className="link btn btn-outline-danger"> Deletar </a>
        <a href=""  className="link btn btn-outline-danger">Atualizar</a>
        <a href=""  className="link btn btn-outline-danger">Buscar</a>
        </nav>
    </div>
    </nav>
  );
};

export default Navbar;
