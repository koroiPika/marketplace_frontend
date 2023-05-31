import React, { useState, useContext } from 'react';
import MyContext from '../MyContext';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EnVenta from './EnVenta';
import User from '../components/User';


const Formulario = () => {
  const { idUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");


  const HandleAgregarProducto = async (e) => {
    e.preventDefault();
    if (titulo === "" || imagen === "" || descripcion === "" || precio === "") {
      alert("Debes rellenar todos los campos")
    } else {
      try {
        const requestAgregarProducto = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "idusuario": idUser, "titulo": titulo, "imagen": imagen, "descripcion": descripcion, "precio": precio })
        };
        await fetch('https://marketplace-production-8437.up.railway.app/productos', requestAgregarProducto);
        navigate("/galeria/")
      } catch (err) {
        console.error(`Error: ${err} `)
      }
    }
  };

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
          <Form className='formulario' onSubmit={HandleAgregarProducto}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="URL imagen" onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Título de la publicación" onChange={(e) => setTitulo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Indique un precio" onChange={(e) => setPrecio(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Publicar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;