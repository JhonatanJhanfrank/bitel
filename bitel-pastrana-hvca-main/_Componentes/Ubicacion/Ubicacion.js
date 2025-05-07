import estilos from "./ubicacion.module.css"
export default function Ubicacion() {
    return (
        <div>
            <h1 className={estilos.h1}>
                Ubicacion
            </h1>
                    <div className={estilos.todo}>
            <div className={estilos.contacto}>
                <h2>Contáctanos</h2>
                <p><strong>Dirección:</strong><br />Jr. Virrey Toledo 380, Huancavelica 09001</p>
                <p><strong>Teléfono:</strong><br />(+51) 900360300</p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d687.8135612222914!2d-74.97516223131863!3d-12.787528874592224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e0a7c1560abad%3A0xf26702e51d8cbaf4!2sJr.%20Virrey%20Toledo%20380%2C%20Huancavelica%2009001!5e0!3m2!1ses!2spe!4v1724877549674!5m2!1ses!2spe"
                className={estilos.iframe}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    );
}