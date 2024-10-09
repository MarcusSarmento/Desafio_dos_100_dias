import {usestate} from "react";

function Condicional(){
    const[show, setShow] = useState(false);

    return(
        <div>
            <button onclick={() => setShow(!show)}>
                {show ? "Esconder" : "Mostrar"} Mensagem
            </button>

            {show && <p>Está é uma mensgem condicional</p>}
        </div>
    )

    
}