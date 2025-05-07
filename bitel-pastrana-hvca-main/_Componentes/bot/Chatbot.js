"use client";
import { useState } from "react";
import estilos from "./chatbot.module.css";
import datos from "./datos.json";  // Archivo JSON con las respuestas
import Imagenes from "@/_Especiales/Imagenes/Imagenes";

export default function Chatbot() {
  const [contenido, setContenido] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [conversacion, setConversacion] = useState([]);  // Estado para almacenar la conversación
  const [esperandoRespuesta, setEsperandoRespuesta] = useState(false); // Estado para esperar respuesta
  const [escribiendo, setEscribiendo] = useState(false); // Estado para indicar que el bot está escribiendo

  const cerrarChatBot = () => {
    setContenido(false);
  };

  const manejarCambio = (e) => {
    setMensaje(e.target.value);
  };
  const encontrarRespuesta = (input) => {
    const inputLower = input.toLowerCase();
    const palabrasClave = inputLower.match(/\d+(\.\d+)?/); // Busca precios como 29 o 29.90
    let tipoPlan = "";
  
    // Verifica si mencionan "ilimitado" o "limitado"
    if (inputLower.includes("ilimitado")) {
      tipoPlan = "ilimitado";
    } else if (inputLower.includes("limitado")) {
      tipoPlan = "limitado";
    }
  
    // Si se encuentra un precio
    if (palabrasClave) {
      const precioIngresado = parseFloat(palabrasClave[0]); // Extrae el precio como número
    
      // Busca todas las respuestas que incluyan un precio cercano
      const posiblesRespuestas = Object.entries(datos.respuestas).map(([clave, valor]) => {
        const clavePrecio = clave.match(/\d+(\.\d+)?/);
        if (clavePrecio) {
          const precioClave = parseFloat(clavePrecio[0]);
          const diferencia = Math.abs(precioClave - precioIngresado);
          return { clave, valor, diferencia };
        }
        return null;
      }).filter(item => item && (tipoPlan ? item.clave.includes(tipoPlan) : true));
  
      // Ordena las respuestas por la diferencia de precios y selecciona la más cercana
      posiblesRespuestas.sort((a, b) => a.diferencia - b.diferencia);
  
      if (posiblesRespuestas.length > 0) {
        return posiblesRespuestas[0].valor; // Retorna la respuesta con el precio más cercano
      }
    }
  
    // Si no se encuentra precio o tipo, usa distancia Levenshtein para una coincidencia aproximada
    let mejorCoincidencia = datos.respuestas.default;
    let menorDistancia = Infinity;
  
    for (const [clave, valor] of Object.entries(datos.respuestas)) {
      const distancia = calcularDistanciaLevenshtein(inputLower, clave.toLowerCase());
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        mejorCoincidencia = valor;
      }
    }
  
    return mejorCoincidencia;
  };
  
  

  const calcularDistanciaLevenshtein = (str1, str2) => {
    const matriz = Array.from({ length: str2.length + 1 }, (_, i) => Array(str1.length + 1).fill(i));

    for (let j = 0; j <= str1.length; j++) matriz[0][j] = j;

    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        const costo = str1[j - 1] === str2[i - 1] ? 0 : 1;
        matriz[i][j] = Math.min(
          matriz[i - 1][j] + 1, // eliminación
          matriz[i][j - 1] + 1, // inserción
          matriz[i - 1][j - 1] + costo // sustitución
        );
      }
    }

    return matriz[str2.length][str1.length];
  };

  const enviarMensaje = () => {
    if (mensaje.trim()) {
      const nuevoMensajeUsuario = { remitente: "usuario", texto: mensaje };

      // Actualizar la conversación con el mensaje del usuario y establecer el estado de "esperando respuesta"
      setConversacion([...conversacion, nuevoMensajeUsuario]);
      setEsperandoRespuesta(true);
      setEscribiendo(true);

      // Simular tiempo de espera basado en la longitud del mensaje
      const tiempoRespuesta = Math.max(1000, mensaje.length * 100);

      setTimeout(() => {
        const respuesta = encontrarRespuesta(mensaje);
        const nuevoMensajeBot = { remitente: "bot", texto: respuesta };

        // Actualizar la conversación con la respuesta del bot
        setConversacion(prev => [...prev, nuevoMensajeBot]);
        setEsperandoRespuesta(false); // Desactivar el estado de espera
        setEscribiendo(false);
      }, tiempoRespuesta); // Retraso ajustado basado en la longitud del mensaje

      // Limpiar el input
      setMensaje('');
    }
  };

  const abrirChatBot = () => {
    setContenido(true);
  };

  return (
    <div className={estilos.todo}>
      <div className={estilos.icono} onClick={abrirChatBot}>
        <div className={estilos.texto}>ChatBot</div>
        <div className={estilos.imagenes}>
          <Imagenes src="/bot.png" alt="Chat Bot" />
        </div>
      </div>

      {contenido && (
        <div className={estilos.chatBot}>
          <div className={estilos.header}>
            <span>ChatBot</span>
            <button className={estilos.closeButton} onClick={cerrarChatBot}>&times;</button>
          </div>

          <div className={estilos.chatContent}>
            {conversacion.map((msg, index) => (
              <div 
                key={index} 
                className={msg.remitente === "usuario" ? estilos.usuario : estilos.bot}
              >
                {msg.texto}
              </div>
            ))}
            {esperandoRespuesta && (
              <div className={estilos.bot}>
                <em>Esperando respuesta...</em>
              </div>
            )}
            {escribiendo && (
              <div className={estilos.bot}>
                <em>Escribiendo...</em>
              </div>
            )}
          </div>

          <div className={estilos.inputArea}>
            <input 
              type="text" 
              value={mensaje} 
              onChange={manejarCambio} 
              placeholder="Escribe tu mensaje..." 
              className={estilos.input}
              onKeyPress={(e) => e.key === 'Enter' ? enviarMensaje() : null}
            />
            <button onClick={enviarMensaje} className={estilos.sendButton}>
              &#10148;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
