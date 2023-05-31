import React, { useContext } from "react";
import MyContext from "../MyContext";
import Button from "react-bootstrap/Button";


const Sidebar = () => {
  const { products, setPriceFilter, minPrice, setMinPrice, maxPrice, setMaxPrice, setChangeState } = useContext(MyContext)

  const handlerSearch = () => {
    if ((minPrice === 0 && maxPrice === 0)) {
      alert("Ingresa un rango de precios")
    } else if (minPrice >= maxPrice) {
      alert("No es un rango de precios válido")
    } else {
      const filterPrice = products.filter(product => product.precio >= minPrice && product.precio <= maxPrice);
      setPriceFilter(filterPrice)
      setChangeState(2)
    }
  };

  const clear = () => {
    setChangeState(0)
  }

  return (
    <div className="mt-3">
      <h5>Ordenar Por</h5>
      <div>
        <label htmlFor="min-price">Desde</label>
        <br />
        <input className="borderEdit"
          id="min-price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value || 0)} />
      </div>
      <div>
        <label htmlFor="max-price">Hasta </label>
        <br />
        <input className="borderEdit"
          id="max-price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value || 0)} />
      </div>
      <div>
        <Button className="mt-3" variant="primary" onClick={() => handlerSearch()}>BUSCAR</Button>
      </div>
      <div>
        <Button className="mt-3" variant="primary" onClick={() => clear()}>BORRAR FILTROS</Button>
      </div>
    </div>
  );
}


export default Sidebar;