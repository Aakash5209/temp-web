import { useState } from "react"

export const DynamicTab=()=>{

    const [tabs,setTabs] = useState(['Tab 1'])
    const [activeIndex,setActiveIndex] = useState(0)

    const addTab=()=>{
        setTabs([...tabs,`Tab ${tabs.length+1}`])
         setActiveIndex(tabs.length-1)

    }
    const removeTab=()=>{
        console.log(tabs.length)
        if(tabs.length-1>0){
        setActiveIndex(tabs.length-2)
        setTabs(tabs.filter((_,i)=>i!=activeIndex))
     

        }
        else{
            alert('you cant close last tab')
        }
        

    }

    return<>
    <h1>hi i m dymanic tab</h1>
    <div>
        <button onClick={addTab}>Add Tab</button>
        <div>
            {
                tabs.map((tab,index)=>(
                    <button 
                    onClick={()=>setActiveIndex(index)}
                    style={{background: index==activeIndex?'red':''}}
                    >
                        {tab} </button>

                ))
            }
            <button onClick={removeTab}>Close Tab</button>

            <div> {`your active tab is ${tabs[activeIndex]}`}</div>
        </div>
    </div>
    
    </>
}