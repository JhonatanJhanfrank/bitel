import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/_Componentes/Header/Header";
import Footer from "@/_Componentes/Footer/Footer";
import Chatbot from "@/_Componentes/bot/Chatbot";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Bitel - Huancavelica",
  description: "Descubre la mejor experiencia en telecomunicaciones con Bitel Huancavelica. Conéctate con el futuro hoy mismo, con planes innovadores y cobertura inigualable en toda la región. ¡Únete a la red que transforma la manera en que te comunicas!",
  icons: {
    icon: "/icono.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
            <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
      <body className={inter.className}>
        <div>
          <Header></Header>
        </div>
        <div>
        {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
