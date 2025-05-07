"use client"
import estilos from "./inicio.module.css";
import Carrusel from "@/_Componentes/Carrusel/Carrusel";
import Planes from "@/_Componentes/Planes/Planes";
import Ubicacion from "@/_Componentes/Ubicacion/Ubicacion";
import Chatbot from "@/_Componentes/bot/Chatbot";
export default function Home() {
  return (
    <div className={estilos.todo}>
      <Carrusel></Carrusel>
      <Planes></Planes>
      <Chatbot></Chatbot>
     
      <div id="ubicacion">
        <Ubicacion></Ubicacion>
      </div>
    </div>
  );
}
