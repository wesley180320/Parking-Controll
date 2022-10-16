import React from "react";
import { useState } from "react";



const Deletar = () => {

const [deletar, setDeletar] = useState("");



    const handleSubmit = (e) =>{

        e.preventDefault();
        setDeletar("");

        if(deletar !== ""){

            deletarDados(deletar)
            
        }else{

            alert("Verificar Campo Deletar Id")
        }


    }

    const deletarDados = async (deletar) => {

    const url =`https://parkinspott.herokuapp.com/parking-spot/${deletar}`;
    fetch(url,{

        method: "DELETE",
        }).then(res => {
           
            console.log("Deletar status", res.status);
            
            if(res.status == 200){

                alert("Id Deletado")
            }else{

                alert("Id Não Encontrado")
            }

        });
    }

    return (
        <>

            <div className="container text-center">

                <p>Parking <span>Controll</span></p>
                <form onSubmit={handleSubmit}>
                    <div className="col-5 d-flex m-auto mt-3 ">
                        <input type="text" name="name" placeholder="Deletar por id" className="form-control fw-lighter me-3" onChange={ (e) => setDeletar(e.target.value)} value={deletar} ></input>
                        <button type={"submit"} className="btn btn-danger"> Deletar</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Deletar;