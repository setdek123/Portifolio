import type React from "react";


interface PropsButton {
    children: React.ReactNode,
    onclickt: ()=> void
  
}


const Button = ({ children, onclickt}: PropsButton) => {
    return (
        <button style={{background: "#7354e3",padding: "10px",cursor: "pointer", width: "200px", borderRadius: "20px", color: "white"}} onClick={onclickt}>
            {children}
        </button>
    )
}

export default Button;