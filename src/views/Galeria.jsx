import React, { useContext } from 'react';
import MyContext from "../MyContext";
import { Container, Row, Button } from 'react-bootstrap';
import Cards from '../components/Cards';

const Galeria = () => {
  const { products, handlerSearching, priceFilter, changeState } = useContext(MyContext);

  if (changeState === 0) {
    return (
      <div >
        <Container>
          <Row className="gridSidebar" sm={1} md={3} lg={3}>
            {products.map(producto =>
              < Cards
                detalles={<Button className="m-3" variant="primary" type="submit">Ver más detalles</Button>}
                id={producto.idproducto} imagen={producto.imagen} titulo={producto.titulo} precio={producto.precio}
              />)
            }
          </Row>
        </Container>
      </div>
    )
  }
  if (changeState === 1 && handlerSearching !== []) {
    return (
      <div className="gridSidebar">
        <Container>
          <Row sm={3} md={3} lg={3}>
            {handlerSearching.map(prod =>
              < Cards id={prod.idproducto}
                detalles={<Button className="m-3" variant="primary" type="submit">Ver más detalles</Button>}
                imagen={prod.imagen} titulo={prod.titulo} precio={prod.precio} />)
            }
          </Row>
        </Container>
      </div>
    )
  }
  if (changeState === 2) {
    return (
      <div className="gridSidebar">
        <Container>
          <Row sm={3} md={3} lg={3}>
            {priceFilter.map(p =>
              < Cards
                detalles={<Button className="m-3" variant="primary" type="submit">Ver más detalles</Button>} id={p.idproducto} imagen={p.imagen} titulo={p.titulo} precio={p.precio} />)
            }
          </Row>
        </Container>
      </div>
    )
  }

}

export default Galeria;