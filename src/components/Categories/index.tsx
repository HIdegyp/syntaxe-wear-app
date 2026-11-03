import tenisBranco from "@/assets/images/tenis-branco.jpg";
import tenisCinza from "@/assets/images/tenis-cinza.jpg";
import tenisColorido from "@/assets/images/tenis-colorido.jpg";
import tenisFuturistico from "@/assets/images/tenis-futurista.jpg";
import { Button } from "../Button";


const categories = [
  { name: " Casual", image: tenisBranco },
  { name: " Esportivo", image: tenisCinza },
  { name: " Colorido", image: tenisColorido },
  { name: " Futuristico", image: tenisFuturistico },
]


export const Categories = () => {
  return (
    <section className="container flex gap-2.5  lg:grid grid-cols-4 gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
{categories.map((category, index) => (
      <div key={index} style={{ backgroundImage:`url(${category.image})` }} className="h-125 bg-cover bg-center rounded-[20px] relative flex items-center justify-center  text-center text-white shrink-0 w-[95%] md:w1/2 lg:w-full">
        <div className="absolute  inset-0 bg-black/30 rounded-[20px] snap-center">
        </div>

        <div className="relative">
          <Button variant="secondary">{category.name}</Button>
        </div>
      </div>
    ))}
    </section>
  )
}