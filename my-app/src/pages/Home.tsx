import React from "react";
import img from "../img/rayssadev.png";
import "./home.css";
export const Home = () => {
  return (
    <>
    <h1> Página Home </h1>
    <h2>olá, busco namorado para minha amiga luiza,<br />
    interessados clicar em serviços! <br />
    esse prédio combina com ela</h2>
    <img className="ima" src={ img } alt="" />
    </>
    
  );
}