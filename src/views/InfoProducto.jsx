import React, { useContext } from "react";
import MyContext from "../MyContext";
import { useParams } from "react-router-dom";
import EnVenta from "./EnVenta";
import User from "../components/User";
import Cards from '../components/Cards';

const InfoProducto = () => {
  const { products, idUser } = useContext(MyContext);
  const { id } = useParams();

  return (
    <div>
      <div className="listGrid" key={idUser}>
        <div className="one">
          <EnVenta />
        </div>
        <div className="two">
          <div className="containerUser m-4">
            <User />
          </div>
          <div className="gridOnlyCard">
            {products.filter((pro) => (pro.idproducto === id)).map((info) => (
              <div className="contenedor m-5" key={info.idproducto} >
                < Cards id={info.idproducto} imagen={info.imagen} descripcion={info.descripcion} titulo={info.titulo} precio={info.precio} />)
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProducto;