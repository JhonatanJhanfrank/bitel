import estilos from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={estilos.todo}>
      <div className={estilos.logo}>bitel@2024</div>
      <nav className={estilos.nav}>
        <Link className={estilos.link} href="/Nosotros">
          Sobre Nosotros
        </Link>
        <Link className={estilos.link} href="/Servicios">
          Servicios
        </Link>
        <Link className={estilos.link} href="/Nosotros">
          Contacto
        </Link>
      </nav>
      <div className={estilos.social}>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-facebook"></ion-icon>
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-twitter"></ion-icon>
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
        </Link>
      </div>
    </footer>
  );
}
