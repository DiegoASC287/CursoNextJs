import Selecao from "./Selecao"

interface ListaItemProps{
    valor: string
    concluido: boolean
    alterarStatus: () => void
}

export default function ListaItem(props: ListaItemProps){

    const estiloTexto = props.concluido ? "line-through text-gray-300" : "text-gray-500"
    return (
        <li onClick={props.alterarStatus} className={
            `flex items-center
             bg-white
              text-black
              border-b border-gray-400
              cursor-pointer
              p-5
              text-xl`
              
        }>
            <Selecao valor={props.concluido}/>
            <span className={`font-light ml-5 ${estiloTexto}`}>{props.valor}</span>
        </li>
    )
}