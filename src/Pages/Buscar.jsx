import React from "react";
import { useState, useEffect } from "react";
import "./Buscar.css"



const Buscar = () => {

    const [contrato, setContrato] = useState([]);
    const [proxima, setProxima] = useState(1);
    const [x, setX] = useState();



    async function fetchData(a) {
        setProxima(a);

        console.log(proxima);
        console.log(a);

        if (a < 0) {
            setProxima(0);
        }

        const url2 = `https://parkinspott.herokuapp.com/parking-spot?page=${a}&size=1sort=registrationDate,ASC`;
        const res = await fetch(url2);
        const obj = await res.json();
        const data = obj["content"];

        // Verificar se o array está vazio.
        console.log("array" + data.length);

        //Array vazio o x fica true e aparece a mensagem
        if (data.length === 0) {
            setX(true);
            setProxima(-1);
        } else {
            setX(false);
        }

        setContrato(data);

        console.log(obj);

        // data.forEach(element => {
        //     console.log(element.id)
        // });
    }

    useEffect(() => {
        fetchData(0);
    }, []);



    return (

        <>

            <div className="container d-flex justify-content-center mt-3">
                <h1> Cadastrados</h1>
                <ul className="list-group col-6 ">

                    {contrato.map((contrato) => (

                        <li className="list-group-item" key={contrato.id} >Id: {contrato.id} <br /> <hr /> Numero Estacionamento: {contrato.parkingSpotnumber} <br /> <hr /> Placa Numero: {contrato.licenseplatecar} <br /> <hr /> Marca: {contrato.brandCar} <br /> <hr /> Modelo: {contrato.modelCar}
                            <br /> <hr /> Color Car: {contrato.colorCar} <br /> <hr /> Data de Registro: {contrato.registrationDate} <br /> <hr /> Responsavel: {contrato.responsibleName} <br /> <hr /> Apartamento: {contrato.apartment}  <br /> <hr /> Bloco: {contrato.block}
                        </li>

                    ))}

                    {x && <li className="list-group-item text-center" > SEM CADASTROS PARA MOSTRAR</li>}
                    <div className="d-flex justify-content-center">
                        <button onClick={(e) => fetchData(proxima - 1)} className="btn btn-danger col-6 mt-2 ">Voltar</button>
                        <button onClick={(e) => fetchData(proxima + 1)} className="btn btn-success col-6 mt-2 ">Proximo</button>
                    </div>
                </ul>


            </div>
        </>
    );
}

export default Buscar;