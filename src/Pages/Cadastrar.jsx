import { useState } from "react";
import "./Cadastrar.css"

const Cadastrar = () => {

    const [nome, setNome] = useState("");
    const [numeroGaragem, setNumeroGaragem] = useState("");
    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [cor, setCor] = useState("");
    const [nomeResponsavel, setNomeResponsavel] = useState("");
    const [apartamento, setApartamento] = useState("");
    const [bloco, setBloco] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(nome)



        if(verificacao() == false){

        setNome("");
        setNumeroGaragem("");
        setPlaca("");
        setModelo("");
        setCor("");
        setNomeResponsavel("");
        setApartamento("");
        setBloco("");

        console.log("ola")

        }else if (verificacao() == true){

            console.log("ol")

            alert("Por favor preencher todos os dados! ");

        }


    }

    
    const verificacao = () =>{


        if( nome === "" || numeroGaragem === "" || placa === "" || modelo === "" || cor === "" || nomeResponsavel === "" || apartamento === "" || bloco === "" ){

            return true;
        }else{

            return false;

        }

    }


    return (
        <>
            <div className="formulario" onSubmit={handleSubmit} >
                <h1 className="fw-bold mt-2 "> Formulário de Cadastro</h1>
                <form action="" className="container-auto">
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Nome:</label>
                        <input type="text" name="name" placeholder="Nome" className="form-control fw-lighter" onChange={(e) => setNome(e.target.value)} value={nome}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Numero da Garagem:</label>
                        <input type="text" name="numeroGaragem" placeholder="Numero Garagem" className="form-control fw-lighter" onChange={(e) => setNumeroGaragem(e.target.value)} value={numeroGaragem}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Placa:</label>
                        <input type="text" name="placa" placeholder="Placa" className="form-control fw-lighter" onChange={(e) => setPlaca(e.target.value)} value={placa}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Modelo:</label>
                        <input type="text" name="modelo" placeholder="Modelo" className="form-control fw-lighter" onChange={(e) => setModelo(e.target.value)} value={modelo}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Cor:</label>
                        <input type="text" name="cor" placeholder="Cor" className="form-control fw-lighter" onChange={(e) => setCor(e.target.value)} value={cor}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Nome do Responsável:</label>
                        <input type="text" name="nomeResponsavel" placeholder="Nome do Responsável" className="form-control fw-lighter" onChange={(e) => setNomeResponsavel(e.target.value)} value={nomeResponsavel}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Apartamento:</label>
                        <input type="text" name="apartamento" placeholder="Apartamento" className="form-control fw-lighter" onChange={(e) => setApartamento(e.target.value)} value={apartamento}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-2">Bloco:
                        </label>
                        <input type="text" name="Bloco" placeholder="Bloco" className="form-control fw-lighter" onChange={(e) => setBloco(e.target.value)} value={bloco}>
                        </input>
                    </div>
                    <button type={"submit"} className="btn btn-success mt-4 fw-bold">Enviar</button>
                </form>
            </div>



        </>
    );
};


export default Cadastrar;
