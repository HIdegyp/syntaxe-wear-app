import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import { Button } from "../Button";
import "./index.css";
import { Overlay } from "../Overlay";


export const Gallery = () => {
  return (
    <section className="container gallery-grid mb-10">
      <div className="gallery-highlight">
        <img
          src={galeriaHomem}
          alt="Modelo masculino sentado usando tenis"
          className="gallery-highlight-image"
        />
     <Overlay title="Krypton One" subtitle="Estilo urbano com atitude" className="inset-0 justify-center items-center">
      <Button variant="secondary">Masculino</Button>
      <Button variant="secondary">Feminino</Button>
      
     </Overlay>
     </div>
      <img
        src={galeriaTenisRoxo}
        alt="Tenis roxo"
        className="gallery-item gallery-item-purple"
      />
      <img
        src={galeriaModelo}
        alt="Modelo feminina usando tenis"
        className="gallery-item gallery-item-model"
      />
      <img
        src={galeriaTenisColorido}
        alt="Tenis colorido"
        className="gallery-item gallery-item-color"
      />
      <img
        src={galeriaTenisBrancoEPreto}
        alt="Tenis preto e branco"
        className="gallery-item gallery-item-white"
      />
      <img
        src={galeriaTenisCinza}
        alt="Tenis cinza"
        className="gallery-item gallery-item-silver"
      />
    </section>
  );
};