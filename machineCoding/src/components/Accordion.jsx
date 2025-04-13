import { useState } from "react"

export const Accordion = ()=>{

    const data = [
        { title:'section 1',content:'hey this is section 1'},
        { title:'section 2',content:'hey this is section 2'},
        { title:'section 3',content:'hey this is section 3'},
        { title:'section 4',content:'hey this is section 4'},
    ]
    const [activeIndex,setActiveIndex] = useState(null)


    const handleToggle=(index)=>{
        setActiveIndex(activeIndex===index?null:index)

    }

    return<>
    <h1>hi i m Accordion</h1>
    {
        data.map((item,index)=>(
            <div key={index}>
                <button onClick={()=>handleToggle(index)}> {item.title}</button>

                {activeIndex===index && <p>{item.content}</p>}

            </div>

        ))
    }


    </>





}