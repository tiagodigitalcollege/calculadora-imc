import { FaWeightHanging } from "react-icons/fa";
import InputComponent from "../InputComponent";
import { FaRuler } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";



export default function CardImc(){
    const [altura, setAltura] = useState (0);
    const [peso,setPeso] = useState (0);
    const [resultado, setResultado] = useState (0);
    const [faixa, setFaixa] = useState (0);

    function calularImc(){
        if (!altura ||! peso){
            toast.error("Preencha todos os campos");
            return;
        }

        const calculo =(peso / (altura * altura)) *10000;

        setResultado(calculo.toFixed(2))
        if(calculo <18.5){
           return setFaixa("está abaixo do peso");

        }

        if (calculo >= 18.5 && calculo <= 24.9){
            return setFaixa("está no peso ideal");
        }

        if (calculo >= 25 && calculo <= 29.9){
            return setFaixa("está sobre peso");
        }

        if (calculo >= 30 && calculo <= 34.9){
            return setFaixa("possui obesidade grau 1º");
        }

        if (calculo >= 35){
            return setFaixa("possui obesidade grau 2º");
        }


    }


    return(
        <div className="w-[60%] p-4 min-h-[300px] bg-gray-800 rounded-xl flex flex-col">

            <div className="w-full ">
                <p className="font-bold text-[35px] text-white"> Calculadora-IMC</p>
                <div className="w-[250px] h-[5px] bg-purple-700 rounded-md"></div>
            </div>
            <div className="w-full flex flex-col gap-2 mt-4">
                <InputComponent
                label={"Altura"}
                icone={<FaRuler />
 }
                valorFinal={"cm"}
                handle={(event) => setAltura(event.target.value)}
                />
                <InputComponent
                label={"Peso"}
                icone={<FaWeightHanging color="#000" />}
                valorFinal={"kg"}
                handle={(event) => setPeso(event.target.value)}
                />

                <div className="w-full flex justify-center items-center">
                <button
                onClick={calularImc}
                className="w-[90%] h-[40px] text-white rounded-md bg-[#7920bc] mt-2 font-bold">Calcular</button>
                </div>
                

            </div>

            {resultado > 0 && (
                <div className="w-full flex flex-col mt-4">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="flex w-full p-[10px]">
                        <div className="w-[40%] flex  flex-col items-center">
                            <p className="text-[38px] text-white ">{resultado}</p>
                            <p className="text-white font-bold">Seu IMC</p>
                        </div>
                        <div className="w-60% flex flex-col justify-center items-center">
                            <p className="text-white font-bold">{faixa}</p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gray-400"></div>
                    

                </div>
            )}


        </div>
    )
}