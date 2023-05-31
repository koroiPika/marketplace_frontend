import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Container } from 'react-bootstrap';
import EnVenta from "./EnVenta";
import Sidebar from "../components/Sidebar";
import Cards from '../components/Cards';

const Perfil = () => {
  const { products, users, idUser } = useContext(MyContext);
  return (
    <div>
      {users
        .filter((user) => user.idusuario === idUser)
        .map((us) => (
          <div className="listGrid" key={us.idusuario}>
            <div className="one">
              <EnVenta OrderBysearch={<Sidebar />} />
            </div>
            <div className="two">
              <Container>
                <div className="containerUser m-4">
                  {us.nombre}
                </div>
                <div className="gridCards" >
                  {products.filter((prod) => prod.idproducto === idUser)
                    .map((info) => (
                      <div>
                        < Cards id={info.idproducto} imagen={info.imagen} descripcion={info.descripcion} titulo={info.titulo} precio={info.precio} />)
                      </div>
                    ))
                  }
                </div>
              </Container>
            </div>
          </div>
        ))}
    </div>
  )
};

export default Perfil;
