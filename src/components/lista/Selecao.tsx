import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SelecaoProps{
    valor: boolean
}

export default function Selecao(props: SelecaoProps){

    const gradiente = props.valor ? (
        `bg-purple-600`
    ) : (``)
    return (
        <div className={`
        flex
        items-center
        justify-center
        cursor-pointer
        border
        border-gray-400
        rounded-full
        h-8 w-8
        ${gradiente} text-white       
        `}>{props.valor ? 
            <FontAwesomeIcon size="sm" icon={faCheck}/>
            : ""}</div>
    )
}   