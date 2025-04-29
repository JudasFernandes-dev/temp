import "./input.css"

type inputprops = {
    type: string;
    placeholder: string;
    titulo: string;
}

function Input({type, placeholder, titulo}: inputprops) {
    return (
        <>
            <div className="conatiner-input-titulo">
                <p>{titulo}</p>
                <input min={0} className="input-component" type={type} placeholder={placeholder}/>
            </div>
        </>
    )
}

export default Input;