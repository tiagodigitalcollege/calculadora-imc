import Image from "next/image";
import imagem from "../../public/fitness-tracker-animate.svg"



export default function LadoEsquerdo(){
    return(
        <div className="[w-50%] h-full flex items-center justify-center">
            <Image
            src={imagem}
            alt="Imagem"
            width={600}
            />


        </div>
        
    )
}