import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const BarraNavegacion = () => {
  const { users, idUser } = useContext(MyContext);
  const tokenNav = localStorage.getItem("token")

  return (
    <div>
      <Navbar className='p-3' bg={tokenNav === null ? "transparent" : "dark"} expand="lg" variant="dark">
        <Container>
          {tokenNav === null ?
            <Link to={tokenNav === null ? "/" : "/galeria/"} className="text-white ms-3 text-decoration-none"> <Navbar.Brand href="#">
              🛒
            </Navbar.Brand></Link> : ""}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              {tokenNav !== null ?
                <div>
                  <Row className="d-flex" >
                    <Col>
                      {users.filter((user) => user.idusuario === idUser)
                        .map((us) => (
                          <Link className="text-light ms-3 text-decoration-none" to={"/perfil/" + idUser}>
                            Perfil de {us.nombre}
                          </Link>
                        ))}

                    </Col>
                  </Row>
                </div>
                : <div>
                  <Row className="d-flex" >
                    <Col>
                      <Link to={"/login/"}>
                        <Button variant="warning">Iniciar Sesión</Button>
                      </Link>
                      <Link className="text-black ms-3 text-decoration-none" to={"/registro/"}>
                        <Button variant="success">Registrate</Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div >
  );
};

export default BarraNavegacion;




