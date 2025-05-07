import estilos from "./contacto.module.css";

export default function Page() {
    const socialMediaIcons = [
        "logo-facebook","logo-instagram", "logo-youtube", "logo-whatsapp","logo-pinterest","logo-tiktok"
    ];

    return (
        <div className={estilos.todo}>
            <h1 className={estilos.h1}>Contacto</h1>
            <div className={estilos.redes}>
                {socialMediaIcons.map((icono, index) => (
                    <div key={index} className={estilos.icono}>
                        <ion-icon name={icono}></ion-icon>
                    </div>
                ))}
            </div>
        </div>
    );
}
