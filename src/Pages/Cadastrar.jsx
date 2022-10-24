import { useState } from "react";
import "./Cadastrar.css"
import Button from "../Components/Button.jsx";


const Cadastrar = () => {

    
    const [numeroGaragem, setNumeroGaragem] = useState("");
    const [placa, setPlaca] = useState("");
    const [modelo, setModelo] = useState("");
    const [cor, setCor] = useState("");
    const [nomeResponsavel, setNomeResponsavel] = useState("");
    const [apartamento, setApartamento] = useState("");
    const [bloco, setBloco] = useState("");
    const [marca, setMarca] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();
    
        if (verificacao() == false) {

            setNumeroGaragem("");
            setPlaca("");
            setModelo("");
            setCor("");
            setNomeResponsavel("");
            setApartamento("");
            setBloco("");
            setMarca("");

            enviarDados()

            alert("Dados Enviados Com Sucesso")

        } else if (verificacao() == true) {


            alert("Por favor preencher todos os dados! ");

        }


    }


    const verificacao = () => {


        if (numeroGaragem === "" || placa === "" || modelo === "" || cor === "" || nomeResponsavel === "" || apartamento === "" || bloco === "") {

            return true;
        } else {

            return false;

        }

    }

    const enviarDados = async () => {

        let data = { "id": null, "parkingSpotnumber": numeroGaragem, "licenseplatecar": placa, "brandCar": marca, "modelCar": modelo, "colorCar": cor, "registrationDate": null, "responsibleName": nomeResponsavel, "apartment": apartamento, "block": bloco };
        fetch("https://parkinspott.herokuapp.com/parking-spot/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Promise resolved", res);
        });

    }



    return (
        <>


            <div className="formulario" onSubmit={handleSubmit} >
                <div>
                    <Button />
                </div>
                <h1 className="fw-bold  text-center mt-1 "> Formulário de Cadastro</h1>
                <form action="" className="container-auto m-auto text-center col-7 col-lg-12  ">
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Numero da Garagem:</label>
                        <input type="text" name="numeroGaragem" placeholder="Numero Garagem" className="form-control fw-lighter" onChange={(e) => setNumeroGaragem(e.target.value)} value={numeroGaragem}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Placa:</label>
                        <input type="text" name="placa" placeholder="Placa" className="form-control fw-lighter" onChange={(e) => setPlaca(e.target.value)} value={placa}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Marca:</label>
                        <input type="text" name="placa" placeholder="Marca" className="form-control fw-lighter" onChange={(e) => setMarca(e.target.value)} value={marca}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Modelo:</label>
                        <input type="text" name="modelo" placeholder="Modelo" className="form-control fw-lighter" onChange={(e) => setModelo(e.target.value)} value={modelo}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Cor:</label>
                        <input type="text" name="cor" placeholder="Cor" className="form-control fw-lighter" onChange={(e) => setCor(e.target.value)} value={cor}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Nome do Responsável:</label>
                        <input type="text" name="nomeResponsavel" placeholder="Nome do Responsável" className="form-control fw-lighter" onChange={(e) => setNomeResponsavel(e.target.value)} value={nomeResponsavel}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Apartamento:</label>
                        <input type="text" name="apartamento" placeholder="Apartamento" className="form-control fw-lighter" onChange={(e) => setApartamento(e.target.value)} value={apartamento}></input>
                    </div>
                    <div className="col-12">
                        <label htmlFor="name" className="form-label mt-1">Bloco:
                        </label>
                        <input type="text" name="Bloco" placeholder="Bloco" className="form-control fw-lighter" onChange={(e) => setBloco(e.target.value)} value={bloco}>
                        </input>
                    </div>
                    <button type={"submit"} className="btn btn-success mt-2 mb-2 fw-bold">Enviar</button>
                </form>
            </div>


        </>
    );
};


export default Cadastrar;
