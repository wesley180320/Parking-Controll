import React from "react";
import { useState } from "react";



const Atualizar = () => {


    const [x, setX] = useState();
    const [id, setId] = useState("");
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

        buscarDados();

    }

    const atualizarDados = async (e) => {

        e.preventDefault();

        if(verificacao() == false){

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
        
                if(res.status == 200){
        
                    alert("Dados atualizados com sucesso")
        
        
                }
        
            });
        }



    }

    const buscarDados = async () => {


        const url2 = `https://parkinspott.herokuapp.com/parking-spot/${id}`;
        const res = await fetch(url2);
        const obj = await res.json();

        console.log(obj.id);

        if(obj.id != null){

            setX(true);
            setNumeroGaragem(obj.parkingSpotnumber);
            setBloco(obj.block);
            setCor(obj.colorCar);
            setApartamento(obj.apartment);
            setMarca(obj.brandCar);
            setModelo(obj.modelCar);
            setNomeResponsavel(obj.responsibleName);
            setPlaca(obj.licenseplatecar);
            


            return true;

        }else{

            alert("O id não existe na base de dados")
        
            return false;
        }


    }

    const verificacao = () => {


        if(numeroGaragem == "" || placa == "" || marca == "" || modelo == "" || cor == "" || nomeResponsavel == "" || apartamento == "" || bloco == ""){
            alert("Um ou mais campos estão vazios");

            return true;
        }else{

            return false;
        }


    }

    return (

        <div className="container text-center">

<div onSubmit={handleSubmit}>
<p>Parking <span>Controll</span></p>
        <h1 className="fw-bold  text-center mt-5 "> Formulário de Atualização</h1>

        <form>
                    <div className="container-flex d-flex align-items-center m-auto col-11 col-md-3 mt-3 mb-2 ">
                        <input type="text" name="name" placeholder="Digite o id para atualização" className=" form-control fw-lighter me-3" onChange={(e) => setId(e.target.value)} value={id}></input>
                        <button type={"submit"} className="btn btn-danger"> Atualizar </button>
                    </div>
                </form>
               
               { x &&
                <form onSubmit={atualizarDados} className="container-flex d-flex flex-column align-items-center m-auto text-center col-3 col-lg-12 ">
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
                <button type={"submit"} className="btn btn-success mt-2 mb-2 fw-bold">Enviar</button>
            </form> }
               
               
            </div>

        </div>
      

   

    
    )
}

export default Atualizar;