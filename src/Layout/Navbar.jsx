
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark {styles.navbar} sticky-top">

      <div className="container-fluid">
        <div>
         <a href="/"><p> Parking <span>Controll</span></p> <br /></a> 
          <p className="sistema">Sistema de Controle de Estacionamento para Veículos.</p>
        </div>
        <nav>
          <Link className="link btn btn-outline-danger " to={"/Cadastrar"}>Cadastrar</Link>
          
          <a href="" className="link btn btn-outline-danger"> Deletar </a>
          <a href="" className="link btn btn-outline-danger">Atualizar</a>
          <a href="" className="link btn btn-outline-danger">Buscar</a>
        </nav>
      </div>

    </nav>

    
  );
};

export default Navbar;
