import { useState } from "react";
import estilos from "./planes.module.css";
import datos from "@/app/datos.json";
import Link from "next/link";
export default function Planes() {
    const [activeTab, setActiveTab] = useState("ilimitados");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const renderPlanes = (tipo) => {
        // Filtros para mostrar solo los planes específicos
        const filtros = {
            ilimitados: ["39.90", "69.90", "105.90"],
            limitados: ["39.90", "69.90", "105.90"]
        };

        return datos.planes[tipo]
            .filter(plan => filtros[tipo].some(filtro => plan.nombre.includes(filtro)))
            .map((plan, index) => {
                const mensaje = `Plan: ${plan.nombre}, Datos móviles: ${plan.datosMoviles}, Llamadas: ${plan.llamadas}, Mensajes: ${plan.mensajes}, Beneficios: ${plan.beneficiosAdicionales}, Precio: ${plan.precio}`;
                const numeroTelefono = "+51900360300";
                const href = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

                return (
                    <div key={index} className={estilos.planCard}>
                        <h3>{plan.nombre}</h3>
                        <p><strong>Datos móviles:</strong> {plan.datosMoviles}</p>
                        <p><strong>Llamadas:</strong> {plan.llamadas}</p>
                        <p><strong>Mensajes:</strong> {plan.mensajes}</p>
                        <p><strong>Beneficios:</strong> {plan.beneficiosAdicionales}</p>
                        <p className={estilos.precio}><strong>Precio:</strong> {plan.precio}</p>
                        <Link href={href} target="_blank" className={estilos.envio}>
                            Obtener Plan
                        </Link>
                    </div>
                );
            });
    };

    return (
        <div className={estilos.contenedor}>
            <div className={estilos.tabs}>
                <button 
                    className={`${estilos.tab} ${activeTab === "ilimitados" ? estilos.activeTab : ""}`} 
                    onClick={() => handleTabClick("ilimitados")}
                >
                    Ilimitados
                </button>
                <button 
                    className={`${estilos.tab} ${activeTab === "limitados" ? estilos.activeTab : ""}`} 
                    onClick={() => handleTabClick("limitados")}
                >
                    Limitados
                </button>
            </div>
            <div className={estilos.grid}>
                {renderPlanes(activeTab)}
            </div>
        </div>
    );
}
