import React from "react";
import { useState, useEffect } from "react";
import "./Buscar.css"



const Buscar = () => {

    

let a = 0;


const [contrato, setContrato] = useState([]);
const [page, setPage] = useState(a);




const url2 = `https://parkinspott.herokuapp.com/parking-spot?page=${a}&size=1sort=registrationDate,ASC`;



useEffect( () => {

    async function fetchData(){
        const res = await fetch(url2);
        const obj = await res.json();
        const data = obj['content']
        

        setContrato(data);

        console.log(obj)

        // data.forEach(element => {
        //     console.log(element.id)
        // });
    }
    
   fetchData();
},[])





    return (

        <>

<div className="container d-flex justify-content-center mt-3">
<h1> Cadastrados</h1>
            <ul className="list-group col-6 ">
               
               { contrato.map((contrato) => (

           <li className="list-group-item" key={contrato.id} >Id: {contrato.id} <br /> <hr /> Numero Estacionamento: {contrato.parkingSpotnumber} <br /> <hr /> Placa Numero: {contrato.licenseplatecar} <br /> <hr /> Marca: {contrato.brandCar} <br /> <hr /> Modelo: {contrato.modelCar}
           <br /> <hr /> Color Car: {contrato.colorCar} <br /> <hr /> Data de Registro: {contrato.registrationDate} <br /> <hr /> Responsavel: {contrato.responsibleName} <br /> <hr /> Apartamento: {contrato.apartment}  <br /> <hr /> Bloco: {contrato.block}
           </li>
           
               ))}
               <div className="d-flex justify-content-center">
               <button className="btn btn-danger col-4 mt-1 ">Voltar</button>
               <button className="btn btn-success col-4 mt-1">Proximo</button>
               </div>
          
            </ul>
</div>
        </>
    );
}

export default Buscar;