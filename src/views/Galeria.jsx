import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Container, Row } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Cards from '../components/Cards';
import EnVenta from './EnVenta';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import User from '../components/User';

const Galeria = () => {
  const { products, handlerSearching, priceFilter, changeState, idUser, searchConcept, setSearchConcept, setHandlerSearching, setChangeState } = useContext(MyContext);
  const navigate = useNavigate();

  const handlerBusqueda = () => {
    if (searchConcept === "") {
      alert("¿Qué estas buscando?")
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


  if (changeState === 0) {
    return (
      <div>
        <div className="listGrid" key={idUser}>
          <div className="one">
            <EnVenta OrderBysearch={<Sidebar />} />
          </div>
          <div className="two">
            <div className="containerUser m-4">
              <User />
            </div>
            <Form className="d-flex">

              <Form.Control
                type="text"
                placeholder="Busca un producto"
                className="me-2"
                aria-label="Search"
                value={searchConcept}
                onChange={({ target }) => setSearchConcept(target.value)}

              />
              <Button variant="outline-success" onClick={handlerBusqueda}>Buscar</Button>
            </Form>
            <Container>
              <div className="gridCards" >
                {products.map(producto =>

                  < Cards id={producto.idproducto} imagen={producto.imagen} titulo={producto.titulo} precio={producto.precio}

                    detalles={<Button className="m-3" variant="primary" type="submit">Ver más detalles</Button>} />)
                }
              </div>
            </Container>
          </div>
        </div>
      </div>
    )
  }
  if (changeState === 1 && handlerSearching !== []) {
    return (
      <div>
        <div className="listGrid" key={idUser}>
          <div className="one">
            <EnVenta OrderBysearch={<Sidebar />} />
          </div>
          <div className="two">
            <div className="containerUser m-4">
              <User />
            </div>
            <Form className="d-flex">

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
            <div className="galeryEdit">

              <div className="sideGalery">
                <Sidebar />
              </div>
              <Container>
                <Row sm={3} md={3} lg={3}>
                  {handlerSearching.map(prod =>
                    < Cards id={prod.idproducto} imagen={prod.imagen} titulo={prod.titulo} precio={prod.precio} />)
                  }
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>

    )
  }
  if (changeState === 2) {
    return (
      <div>
        <div className="listGrid" key={idUser}>
          <div className="one">
            <EnVenta OrderBysearch={<Sidebar />} />
          </div>
          <div className="two">
            <div className="containerUser m-4">
              <User />
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Busca un producto"
                className="me-2"
                aria-label="Search"
                value={searchConcept}
                onChange={(e) => setSearchConcept(e.target.value)}
              />
              <Button variant="outline-success" onClick={handlerBusqueda}>Buscsssar</Button>
            </Form>
            <div className="galeryEdit">
              <User />
              <Container>
                <Row sm={3} md={3} lg={3}>
                  {priceFilter.map(p =>
                    < Cards id={p.idproducto} imagen={p.imagen} titulo={p.titulo} precio={p.precio} />)
                  }
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default Galeria;