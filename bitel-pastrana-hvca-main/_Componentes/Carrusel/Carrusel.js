import { useState, useEffect } from "react";
import estilos from "./carrusel.module.css";
import Imagenes from "@/_Especiales/Imagenes/Imagenes";
import Link from "next/link";
export default function Carrusel() {
  const [indiceActivo, setIndiceActivo] = useState(0);

  const datos = [
    {
      img: "/planes.png",
      titulo: "Explora Nuestros Planes Exclusivos",
      porcentaje: "85% de visitantes vieron esto",
      enlace: "/Servicios",
    },
    {
      img: "/ubicacion.jpg",
      titulo: "Encuéntranos Fácilmente",
      porcentaje: "92% de usuarios interesados",
      enlace: "#ubicacion",
    },
    {
      img: "/redes.jpg",
      titulo: "Conéctate con Nosotros en Redes Sociales",
      porcentaje: "78% interactuaron aquí",
      enlace: "/Contactos",
    },
    {
      img: "/nosotros.png",
      titulo: "Conoce Más Sobre Nosotros",
      porcentaje: "88% de visitantes exploraron esto",
      enlace: "/Nosotros",
    }
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActivo((indiceAnterior) => (indiceAnterior + 1) % datos.length);
    }, 3000); // Cambia cada 4 segundos

    return () => clearInterval(intervalo);
  }, [datos.length]);

  return (
    <div className={estilos.contenedorPrincipal}>
      <div className={estilos.fondoAnimado}>
        {/* Agregamos las burbujas aquí */}
        <div className={estilos.burbuja}></div>
        <div className={estilos.burbuja}></div>
        <div className={estilos.burbuja}></div>
        <div className={estilos.burbuja}></div>
        <div className={estilos.burbuja}></div>
      </div>
      <div className={estilos.todo}>
        <div className={estilos.carrusel}>
          {datos.map((elemento, indice) => (
            <div
              key={indice}
              className={`${estilos.diapositiva} ${indice === indiceActivo ? estilos.activo : ""}`}
            >
              <div className={estilos.imagenes}>
                <Imagenes src={elemento.img} alt={elemento.titulo} className={estilos.imagen} />
              </div>
              <div className={estilos.informacion}>
                <h2>{elemento.titulo}</h2>
                <p>{elemento.porcentaje}</p>
                <Link href={elemento.enlace} className={estilos.enlace}>Ver más</Link>
              </div>
            </div>
          ))}
        </div>
        <div className={estilos.botonera}>
          {datos.map((_, indice) => (
            <button
              key={indice}
              className={`${estilos.boton} ${indice === indiceActivo ? estilos.botonActivo : ""}`}
              onClick={() => setIndiceActivo(indice)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
