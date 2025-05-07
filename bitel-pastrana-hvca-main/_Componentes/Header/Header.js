"use client";
import { useState } from "react";
import estilos from "./header.module.css";
import Link from "next/link";
import Imagenes from "@/_Especiales/Imagenes/Imagenes";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header para computadoras */}
      <header className={estilos.todoDesktop}>
        <Link href="/" className={estilos.logo}>
          <Imagenes src="/icono.png" alt="Logo"></Imagenes>
        </Link>
        <nav className={estilos.nav}>
          <Link href="/" className={estilos.enlace}>
            Inicio
          </Link>
          <Link href="/Servicios" className={estilos.enlace}>
            Servicios
          </Link>
          <Link href="/Contactos" className={estilos.enlace}>
            Contactos
          </Link>
        </nav>
      </header>

      {/* Header para móviles */}
      <header className={estilos.todoMobile}>
        <div
          className={`${estilos.fondoCelular} ${
            isSidebarOpen ? estilos.active : ""
          }`}
          onClick={toggleSidebar}
        ></div>
        <Link href="/" className={estilos.logo}>
          <Imagenes src="/icono.png" alt="Logo" />
        </Link>
        <nav
          className={
            isSidebarOpen
              ? `${estilos.sidebar} ${estilos.open}`
              : estilos.sidebar
          }
        >
          <ion-icon
            name="close"
            className={estilos.closeIcon}
            onClick={toggleSidebar}
          ></ion-icon>
          <Link href="/" className={estilos.enlace} onClick={toggleSidebar}>
            Inicio
          </Link>
          <Link
            href="/Servicios"
            className={estilos.enlace}
            onClick={toggleSidebar}
          >
            Servicios
          </Link>
          <Link
            href="/Contactos"
            className={estilos.enlace}
            onClick={toggleSidebar}
          >
            Contactos
          </Link>
        </nav>
        <div className={estilos.menuIcon} onClick={toggleSidebar}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>
    </>
  );
}
