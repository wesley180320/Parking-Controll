import { Link } from "react-router-dom";

const Button = () => {



    return (

        <>
        <div className="d-flex justify-content-center">
        <Link className="link btn btn-outline-danger" to={"/Deletar"}> Deletar </Link>
        <Link className="link btn btn-outline-danger" to={"/"}> Atualizar </Link>
          <Link className="link btn btn-outline-danger " to={"/Buscar"}>Buscar</Link>
        </div>
         
        </>
    )
}

export default Button;