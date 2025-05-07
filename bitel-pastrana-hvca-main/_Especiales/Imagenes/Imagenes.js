import React from "react";
import Image from "next/image";
import estilos from "./imagenes.module.css";
export default function Imagenes({ src, alt }) {
  const formatSrc = (src) => {
    if (src.startsWith("/https")) {
      return src.slice(1);
    }
    return src;
  };
  const formattedSrc = formatSrc(src);
  return (
    <div className={estilos.todo}>
      <Image
        src={formattedSrc}
        alt={alt}
        fill
        sizes="(max-width: 1000px) 100vw, 50vw"
      />
    </div>
  );
}
