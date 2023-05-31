import React from "react";
import BarraNavegacion from "../components/Navbar";

const Home = () => {

  return (
    <div style={{
      height: '100vh',
      maxWidth: '100%',
      backgroundImage: `url(${'https://img.freepik.com/premium-photo/online-shopping-mobile-phone_172660-107.jpg?w=360'})`,
      backgroundSize: 'cover',
    }}>
      <BarraNavegacion />
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <div style={{
          width: '20%',
          textAlign: 'left'
        }}>
          <h1 className=" m-3 p-3 text-light">¡Bienvenidos al MarketPlace</h1>
          <h3 className=" ms-3 ps-3 ">💻🚐🏠👩</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;