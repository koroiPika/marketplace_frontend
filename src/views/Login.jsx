import React, { useContext, useState, } from 'react';
import MyContext from '../MyContext';
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const { setUsers, setIdUser, setProducts } = useContext(MyContext);
  const navigate = useNavigate();
  const [correoIngresado, setCorreoIngresado] = useState("");
  const [contrasenaIngresada, setContrasenaIngresada] = useState("");

  const HandleLoginSesion = async (e) => {
    e.preventDefault()
    if (correoIngresado === "" || contrasenaIngresada === "") {
      alert("Debes ingresar tus datos para continuar")
    };

    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "correo": correoIngresado, "contrasena": contrasenaIngresada })
      };
      const response = await fetch('https://marketplace-production-8437.up.railway.app/login', requestOptions);
      if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`) };
      const data = await response.json();
      var getToken = data.token;
      var getidUsuario = data.idUsuario;
      localStorage.setItem('token', getToken);
    } catch (err) { console.error(`Error: ${err} `) };

    try {
      const response = await fetch("https://marketplace-production-8437.up.railway.app/perfil", { method: 'GET' });
      const dataUsuarios = await response.json();
      setUsers(dataUsuarios);
      setIdUser(getidUsuario);
      navigate("/");
    } catch (err) { console.error(`Error: ${err} `) };

    try {
      const response = await fetch("https://marketplace-production-8437.up.railway.app/productos", { method: 'GET' });
      const dataProductos = await response.json();
      setProducts(dataProductos)
    } catch (err) { console.error(`Error: ${err} `) };
  };

  return (
    <div className='containerLogin'>
      <h1 className='login'>Market Place</h1>
      <h3 className='login'>Iniciar sesión</h3>
      <Form className='login' onSubmit={HandleLoginSesion}>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            name="correo"
            placeholder="name@example.com"
            onChange={(e) => setCorreoIngresado(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="contrasena"
            placeholder="******"
            onChange={(e) => setContrasenaIngresada(e.target.value)} />
        </Form.Group>
        <Row className="d-flex" >
          <Col>
            <Button variant="success" type="submit">Iniciar Sesión</Button>
            <Link to={"/"} className="text-white ms-3 text-decoration-none" >
              <Button variant="light" type="submit">Volver</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;