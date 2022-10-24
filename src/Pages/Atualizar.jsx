import React from "react";
import { useState } from "react";



const Atualizar = () => {


    const [x, setX] = useState();
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

        atualizarDados();

    }

    const atualizarDados = async (id) => {

    const data = {"id": null,"parkingSpotnumber": numeroGaragem, "licenseplatecar": placa, "brandCar": marca, "modelCar": modelo, "colorCar": cor, "registrationDate": null, "responsibleName": nomeResponsavel, "apartment": apartamento, "block": bloco  }

    const url = `https://parkinspott.herokuapp.com/parking-spot/${id}`
    fetch(url, {

        method: "PUT",
        headers: {
            "Content-Type":  "application/json",
        },
        body: JSON.stringify(data)
    }).then(res =>{

        console.log("Promise resoved",res)

    });


    }

    return (

        
        <div onSubmit={handleSubmit}>
        <h1 className="fw-bold  text-center mt-1 "> Formulário de Atualização</h1>
                <form action="" className="container-flex d-flex flex-column align-items-center m-auto text-center col-3 col-lg-12 d-none  ">
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Numero da Garagem:</label>
                        <input type="text" name="numeroGaragem" placeholder="Numero Garagem" className="form-control fw-lighter" onChange={(e) => setNumeroGaragem(e.target.value)} value={numeroGaragem}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Placa:</label>
                        <input type="text" name="placa" placeholder="Placa" className="form-control fw-lighter" onChange={(e) => setPlaca(e.target.value)} value={placa}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Marca:</label>
                        <input type="text" name="placa" placeholder="Marca" className="form-control fw-lighter" onChange={(e) => setMarca(e.target.value)} value={marca}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Modelo:</label>
                        <input type="text" name="modelo" placeholder="Modelo" className="form-control fw-lighter" onChange={(e) => setModelo(e.target.value)} value={modelo}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Cor:</label>
                        <input type="text" name="cor" placeholder="Cor" className="form-control fw-lighter" onChange={(e) => setCor(e.target.value)} value={cor}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Nome do Responsável:</label>
                        <input type="text" name="nomeResponsavel" placeholder="Nome do Responsável" className="form-control fw-lighter" onChange={(e) => setNomeResponsavel(e.target.value)} value={nomeResponsavel}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Apartamento:</label>
                        <input type="text" name="apartamento" placeholder="Apartamento" className="form-control fw-lighter" onChange={(e) => setApartamento(e.target.value)} value={apartamento}></input>
                    </div>
                    <div className="col-3">
                        <label htmlFor="name" className="form-label mt-1">Bloco:
                        </label>
                        <input type="text" name="Bloco" placeholder="Bloco" className="form-control fw-lighter" onChange={(e) => setBloco(e.target.value)} value={bloco}>
                        </input>
                    </div>
                    <button type={"submit"} className="btn btn-success mt-5 fw-bold">Enviar</button>
                </form>
            </div>

   

    
    )
}

export default Atualizar;