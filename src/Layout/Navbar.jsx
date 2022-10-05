
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <div>
          <a href="/"><p> Parking <span>Controll</span></p> <br /></a>
          <p className="sistema">Sistema de Controle de Estacionamento para Veículos.</p>
        </div>
        <nav>
          <Link className="link btn btn-outline-danger" to={"/"}> Home </Link>
          <Link className="link btn btn-outline-danger " to={"/Cadastrar"}>Acessar Sistema</Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
