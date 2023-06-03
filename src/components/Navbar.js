import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BarraNavegacion = () => {
  const { users, products, searchConcept, setSearchConcept, setHandlerSearching, idUser, setChangeState } = useContext(MyContext);
  const tokenNav = localStorage.getItem("token")
  const navigate = useNavigate()

  const clearLocalStorage = () => {
    if (tokenNav !== "") {
      localStorage.clear("token")
    }
  };
  const handlerBusqueda = () => {
    if (searchConcept === "") {
      alert("¿Qué estas buscando?")
    } else if (searchConcept !== "" && tokenNav === null) {
      alert("Regístrate e Inicia Sesión antes de continuar")
      navigate("/")
    } else {
      navigate("/galeria/")

    }

    const handler = products.filter((prod) => {
      return (prod.titulo.toLowerCase().includes(searchConcept))
    })
    setHandlerSearching(handler);
    setSearchConcept("")
    setChangeState(1)
  };

  return (

    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {tokenNav === null ?
            <Link to={tokenNav === null ? "/" : "/galeria/"} className="text-white ms-3 text-decoration-none"> <Navbar.Brand href="#">
              🛒
            </Navbar.Brand></Link> : ""}        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {tokenNav !== null ?

            <>
              <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto">

                  <Nav>
                    {users.filter((user) => user.idusuario === idUser)
                      .map((us) => (
                        <Link className="text-light m-3 text-decoration-none" to={"/enventa/" + idUser}>
                          Perfil de {us.nombre}
                        </Link>
                      ))}

                  </Nav>

                  {users
                    .filter((user) => user.idusuario === idUser)
                    .map((us) => (
                      <div className="d-flex" key={us.idusuario}>
                        <Nav>
                          <Link className="text-light m-3 text-decoration-none" to={"/formulario"}>
                            Publicar un producto
                          </Link>
                        </Nav>

                        <Nav>
                          <Link className="text-light m-3 text-decoration-none" to={"/galeria"}>
                            Galeria de productos
                          </Link>
                        </Nav>

                      </div>
                    ))}
                </Nav>
                <Nav>
                  <Form className="d-flex  ms-3 ">
                    <Form.Control
                      type="search"
                      placeholder="Busca un producto"
                      className="me-2"
                      aria-label="Search"
                      value={searchConcept}
                      onChange={(e) => setSearchConcept(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={handlerBusqueda}>Buscar</Button>
                  </Form>
                  <Link className="text-light ms-3 text-decoration-none" to={"/"} onClick={clearLocalStorage}>
                    <Button variant="danger">Cerrar Sesión</Button>
                  </Link>
                </Nav>
              </Navbar.Collapse>

            </>

            : <div>

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                </Nav>
                <Nav>
                  <Nav>
                    <Link to={"/login/"}>
                      <Button variant="warning">Iniciar Sesión</Button>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link className="text-black ms-3 text-decoration-none" to={"/registro/"}>
                      <Button variant="success">Registrate</Button>
                    </Link>            </Nav>
                </Nav>
              </Navbar.Collapse>
            </div>
          }
        </Container>
      </Navbar>

    </div >
  );
};

export default BarraNavegacion;




