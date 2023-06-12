import { useEffect, useState } from 'react';
import './Comment.css'

function Comments() {


    useEffect(() => {
        loadOpiniones()
    }, [])

    const [datos, setDatos] = useState([]);
    const [randomIMG, setRandomIMG] = useState([
        "https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png",
        "https://cdn-icons-png.flaticon.com/512/147/147144.png",
        "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
        "https://www.tsensor.online/wp-content/uploads/2020/04/avatar-icon-png-105-images-in-collection-page-3-avatarpng-512_512.png",
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Image-File.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man4-512.png",
        "https://cdn1.iconfinder.com/data/icons/avatars-flat/33/an-05-512.png"
    ]);


    function loadOpiniones() {
        let urlPage = "https://ic-15.herokuapp.com/api/comments";
        fetch(urlPage).then(response => response.json())
            .then(function (data) {
                setDatos(data.data);
            })
    }

    const guardarOpinion = () => {
        const comentario = document.getElementById("txtOpinion").value;
        const name = document.getElementById("txtNombre").value;
        const star = document.querySelector('input[name="exampleRadios"]:checked').value;

        if (comentario == "") {
            alert("El comentario no puede estar vacío");
            return false;
        }

        if (name == "") {
            alert("El nombre no puede estar vacío");
            return false;
        }

        let urlPage = "https://ic-15.herokuapp.com/api/comments?body=" + comentario + "&rating=" + star + "&name=" + name;

        const options = {
            method: "POST"
        };

        fetch(urlPage, options).then(response => response.json())
            .then(function (data) {
                alert(data.message);
                window.scrollTo(0, 0);
                loadOpiniones();
            })
    }

    return (
        <div className="Comments">

            <h4 className='title-comment'>Sección de comentarios de nuestros usuarios</h4>
            <img src="https://i.gifer.com/origin/f9/f9889257dd191dc36b7d28d4578beeef_w200.gif" width="300" alt="logo" />

            {datos.length > 0 ? (
                datos.map((dato, indice) => {
                    return (
                        <div key={indice} className="seccionTitulos imagen-pagina-principal-full"
                            style={{ marginLeft: "1%", marginRight: "1%", border: "1px solid #025EEA", paddingLeft: "5px" }}>
                            <div className="contenedorTitulos">
                                <div className="container-image-char" style={{ width: "190px", height: "190px" }}>
                                    <img className="imagenProducto" src={randomIMG[Math.floor(Math.random() * (7 - 0 + 1) + 0)]} alt="" width="190" height="190" />
                                </div>
                                <div className="character-content-right">
                                    <h1 className="lblCliente" style={{ color: "#025EEA" }}></h1>
                                    <div className="form-section" style={{ fontSize: "14px" }}>
                                        <div className="form-element" style={{ width: "30%", textAlign: 'left' }}>
                                            <label className="tagDesc">Calificación:</label>
                                            <div>
                                                <span className="tagVal tagCalif">  {dato.rating}⭐ </span>
                                            </div>
                                        </div>
                                        <div className="form-element" style={{ width: "30%", textAlign: 'left' }} >
                                            <label className="tagDesc">Nombre:</label>
                                            <div>
                                                <span className="tagVal tagContact"> {dato.name }</span>
                                            </div>
                                        </div>
                                        <div className="form-element" style={{ width: "100%", textAlign: 'left' }}>
                                            <label className="tagDesc">Opinión:</label>
                                            <div className="div-descripcion">
                                                <span className="tagVal tagopinion" style={{textWrap: "wrap"}}> {dato.body} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (<p>No se encontraron resultados</p>)}

            <div id="cont-characteres"></div>

            <div className="seccionOpinion imagen-pagina-principal-full"
                style={{ marginLeft: "1%", marginRight: "1%", border: "1px solid green", paddingLeft: "5px", backgroundColor: "rgb(227 255 226 / 50%)", height: "310px" }} >
                <div className="contenedorTitulos">
                    <div className="container-image-char" style={{ width: "225px", height: "275px", paddingTop: "50px" }}>
                        <img id="imagenNOpinion" alt="" src={randomIMG[Math.floor(Math.random() * (7 - 0 + 1) + 0)]} width="225" height="225" />
                    </div>
                    <div className="character-content-right">
                        <h1 className="lblCliente" style={{ color: "#025EEA" }}> ¿Qué opinas de nuestra aplicación? </h1>
                        <div className="form-section" style={{ fontSize: "14px" }}>
                        <div className="form-element" style={{ width: "30%", textAlign: 'left' }}>
                                <label className="tagDesc">Nombre:</label>
                                <div>
                                    <input type="email" className="form-control" placeholder="Juan Perez" id="txtNombre" style={{ height: "25px", fontSize: "14px" }} />
                                </div>
                            </div>
                            <div className="form-element" style={{ width: "70%", textAlign: 'left' }}>
                                <label className="tagDesc">Calificación:</label>
                                <div style={{ color: "black !important" }}>
                                    <div className="form-check" style={{ width: "20%", float: "left" }}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="radio1" value="1" />
                                        <label className="form-check-label" htmlFor="exampleRadios1" style={{color: "black"}}>
                                            1 ⭐
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ width: "20%", float: "left" }}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="radio2" value="2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2" style={{color: "black"}}>
                                            2 ⭐
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ width: "20%", float: "left" }}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="radio3" value="3" />
                                        <label className="form-check-label" htmlFor="exampleRadios2" style={{color: "black"}}>
                                            3 ⭐
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ width: "20%", float: "left" }}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="radio4" value="4" />
                                        <label className="form-check-label" htmlFor="exampleRadios2" style={{color: "black"}}>
                                            4 ⭐
                                        </label>
                                    </div>
                                    <div className="form-check" style={{ width: "20%", float: "left" }}>
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="radio5" value="5" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios2" style={{color: "black"}}>
                                            5 ⭐
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-element" style={{ width: "80%", height: "70px", textAlign: 'left' }}>
                                <label className="tagDesc">Opinión:</label>
                                <div className="div-descripcion" style={{ height: "70px" }}>
                                    <textarea id="txtOpinion" className="form-control" style={{ maxWidth: "100%", height: "68px", resize: "none" }} draggable="false" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <p className="cont-btn" style={{ textAlign: "right", marginRight: "20px", marginTop: "190px" }}> <button type="button" onClick={guardarOpinion} className="btn btn-success">¡Guardar opinión!</button> </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Comments;
