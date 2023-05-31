import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RegistroExitosoModal from '../components/ModalRegistro';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Registro = () => {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("");
  // const [imagen, setImagen] = useState("");


  const HandleRegistro = async (e) => {
    e.preventDefault()

    if (correo === "" || contrasena === "" || nombre === "") {
      alert("Debes ingresar todos los campos obligatorios")
    } else if (correo !== "" && contrasena !== "" && nombre !== "") {
      try {
        const requestRegistro = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'correo': correo, 'contrasena': contrasena, 'nombre': nombre })
        };
        await fetch('https://marketplace-production-8437.up.railway.app/registro', requestRegistro)
        alert("Perfil creado con éxito!")
        navigate("/login");
      } catch (err) {
        console.error(`Error: ${err} `)
      }
    }
  };


  return (
    <div className='containerRegistro'>
      <h1 className='registro'>Market Place</h1>
      <h3 className='registro'>Registrarse</h3>
      <Form className='registro' onSubmit={HandleRegistro}>
        <hr />

        <Form.Group className="mb-3">
          <Form.Control type="hidden"
            name="id_usuario"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>

          <Form.Control type="email"
            name="correo"
            placeholder="name@example.com"
            onChange={(e) => setCorreo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password"
            name="contrasena"
            placeholder="****"
            onChange={(e) => setContrasena(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username" onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>
        <Row className="d-flex" >
          <Col>
            <Button variant="warning" type="submit"> Registrarme </Button>
            <Link to={"/"} className="text-white ms-3 text-decoration-none" >
              <Button variant="light" type="submit">Volver</Button>
            </Link>
          </Col>
        </Row>
        < RegistroExitosoModal />
      </Form>
    </div>
  )
};

export default Registro;