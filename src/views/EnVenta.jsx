import React, { useContext } from 'react';
import MyContext from '../MyContext';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EnVenta = (props) => {
  const { idUser } = useContext(MyContext);
  const tokenNav = localStorage.getItem("token")

  const clearLocalStorage = () => {
    if (tokenNav !== "") {
      localStorage.clear("token")
    }
  };
  return (
    <div>
      <div id="grid">
        <div id="item2">
          <Link to={tokenNav === null ? "/" : "/galeria/"} className="text-white ms-3 text-decoration-none fs-3">
            🛒
          </Link>
          <Link className="text-black ms-3 text-decoration-none" to={"/perfil/" + idUser}>
            <h5>Mi perfil</h5>
          </Link>
          <Link className="text-black ms-3 text-decoration-none" to={"/formulario"}>
            <h5>Publicar un producto</h5>
          </Link>
        </div>
        <div id="item1">
          <div className="sideGalery">
            {props.OrderBysearch}
          </div>
        </div>
        <div id="item3">
          <Link className="text-light ms-3 text-decoration-none" to={"/"} onClick={clearLocalStorage}>
            <Button variant="danger">Cerrar Sesión</Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default EnVenta;