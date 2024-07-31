import React ,{useState} from 'react'
import { Input } from 'reactstrap'
export default function AddChemical(props) {
    const {addName} = props
    const [name, setName] = useState("")
  return (
    <Input type='text' value={name} placeholder='Nhập vào tên chất hóa học cần thêm...' name='namechemical' onChange={(e)=>(setName(e.target.value))} 
      onKeyDown={(e)=>{
        if(e.key==="Enter"){
          addName(name)
          setName("")
        }
      }}/>
  )
}
