import ReactModal from 'react-modal';
import {useState} from "react"
const AddMovie=({addfilm})=>{
    let [show,setShow]=useState(false)
    let[name,setName]=useState("")
    console.log(name,"asiaaa")
    let[discription,setDescription]=useState("")
   let[rating,setRating]=useState("")
   let[year,setYear]=useState("")
   let[duration,setDuration]=useState("")
   let[image,setImage]=useState("")
    const handleShow=()=>{
        setShow(!show)
    }
    const add=()=>{
        const newmovie={name,discription:discription,star:rating,year,duration,img:image,id:Math.random()}
        console.log(newmovie,"testttttttt")
        addfilm(newmovie)
        handleShow()
    }
    return(
        <>
        <button onClick={handleShow}>Add movie </button>
<ReactModal
className="Modal"
isOpen={show}
>
<div>
<label>Movie Name</label> 
<input type="text" onChange={(event)=>setName(event.target.value)}/>
</div>
<div>
<label>description</label>  
<input  type="text" onChange={(event)=>setDescription(event.target.value)}/>
</div>
<div>
<label>rating</label> 
<input  type="number" onChange={(event)=>setRating(event.target.value)}/>
</div>
<div>
<label>year</label> 
<input type="number" onChange={(event)=>setYear(event.target.value)}/>
</div>
<div>
<label>duration</label> 
<input type="number" onChange={(event)=>setDuration(event.target.value)}/>
</div>
<div>
<label>image</label> 
<input type="text" onChange={(event)=>setImage(event.target.value)}/>
</div>
<div>
    <button onClick={add} >save</button>
    <button onClick={handleShow}>close</button>
</div>
</ReactModal>

        </>
    )
}
export default AddMovie