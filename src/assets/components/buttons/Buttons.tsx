import "./buttons.css"

function Button({stylebutton, text}: {stylebutton:string, text:string}) {
    return(
        <>
            <button className={stylebutton}>
                {text}
            </button>
        </>
    )
}

export default Button;