import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import { Button } from "../Button";
import "./index.css";

export const Gallery = () => {
  return (
    <section className="container gallery-grid mb-10">
      <div className="gallery-highlight">
        <img
          src={galeriaHomem}
          alt="Modelo masculino sentado usando tenis"
          className="gallery-highlight-image"
        />
        <div className="gallery-highlight-overlay">
          <p className="text-sm font-medium tracking-wider">Krypton One</p>
          <h2 className="text-lg font-medium tracking-wider md:text-xl">
            Estilo urbano com atitude
          </h2>
          <div className="mt-1 flex gap-2.5">
            <Button variant="secondary" size="sm">
              Feminino
            </Button>
            <Button variant="secondary" size="sm">
              Masculino
            </Button>
          </div>
        </div>
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