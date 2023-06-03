import React, { useContext } from "react";
import MyContext from "../MyContext";
import { useParams, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import Card from 'react-bootstrap/Card';

const InfoProducto = () => {
  const { products, users } = useContext(MyContext);
  const { id } = useParams();

  return (
    <div className="gridOnlyCard mb-3">
      {products.filter((pro) => (pro.idproducto == id)).map((info) => (
        <div className="contenedor m-5" key={info.idproducto} >
          <Container>
            <Card className="m-3" style={{ width: "18rem" }} key={id} >
              <Card.Img className="imageCard" variant="top" src={info.imagen} />
              <Card.Body>
                <Card.Title>{info.titulo}</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Title>{info.descripcion}</Card.Title>
              </Card.Body>
              <Card.Body>
                <Card.Text >
                  Precio: ${info.precio}
                </Card.Text>
                <Card.Text >
                  {users.filter((pro) => (pro.idusuario === id)).map((info) => (
                    <>
                      Publicado por: <p>{info.nombre}</p>
                    </>
                  ))}
                </Card.Text>
              </Card.Body>

            </Card>
          </Container>
        </div>)
      )}
      <Link to={"/galeria/"}><Button>Regresar a Galeria</Button></Link>
    </div>
  );
};

export default InfoProducto;
