import Banner from "@/assets/images/banner.jpg";
export const Hero = () => {
    return (
        <div className="container">
            <section className="h-125 rounded-[20px] mb-10 relative">
                <img src={Banner} alt="Homem sentado usando os tenis da syntaxe" className="w-full h-full object-cover  rounded-[20px] " />


                <div className="absolute w-full  bottom-0 flex justify-end  items-center text-center px-6 md:px-24 pb-45 ">
                    <div className="flex flex-col items-center text-white w-[388px]">
                        <h2 className="text-xl font-medium leading-normal tracking-wider mb-2.5">Descubra nossa nova coleção</h2>
                        <h1 className="text-2xl leading-9 tracking-widest mv-10">Novo estilo, novo conforto</h1>


                        <div className="flex gap-3.5">
                            <button>Compra agora </button>
                            <button>Ver outros modelos</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
};