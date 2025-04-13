import { useState } from "react"
import './modal.css'

export const Modal = ()=>{
    const [isOpen,setIsOpen] = useState(false)


    return <>
    {/* <h1>hi i m modal</h1> */}
    <div className="modalContainer">
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        {
            isOpen && (
                <div  className="modalOverlay" onClick={()=>setIsOpen(false)}>
                    <div className="modal" onClick={(e)=>e.stopPropagation()}>
                        <h1>hi thanks for opening modal</h1>
                        <h2>clikc on the close btn to close it</h2>
                        <button onClick={()=>setIsOpen(false)}>Close Modal</button>

                    </div>

                </div>
            )
        }


    </div>
    </>
}