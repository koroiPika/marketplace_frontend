import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Cards = ({ id, imagen, titulo, precio, descripcion, detalles }) => {

  const { users } = useContext(MyContext);
  return (
    <Card className="m-3" style={{ width: "18rem" }} key={id} >
      <Card.Img className="imageCard" variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Title>{descripcion}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text >
          Precio: ${precio}
        </Card.Text>
        <Card.Text >
          {users.filter((pro) => (pro.idusuario === id)).map((info) => (
            <>
              Publicado por: <p>{info.nombre}</p>
            </>
          ))}
        </Card.Text>
      </Card.Body>
      <Link to={"/infoproducto/" + id}>

        {detalles}

      </Link>
    </Card>
  );
};

export default Cards;