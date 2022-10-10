import React from "react";



const Deletar = () => {


    return (
        <>

            <div className="container text-center">

                <p>Parking <span>Controll</span></p>
                <form action="">
                    <div className="col-5 d-flex m-auto mt-3 ">
                        <input type="text" name="name" placeholder="Deletar por id" className="form-control fw-lighter me-3"  ></input>
                        <button type={"submit"} className="btn btn-danger"> Deletar</button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Deletar;