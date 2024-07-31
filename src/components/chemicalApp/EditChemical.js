import React, {useState} from 'react'
import {Input} from 'reactstrap'

export default function EditChemical(props) {
    const {flag, setFlag, updateName} = props
    const [text, setText] = useState("")
  return (
        <Input type='text' placeholder='Nhập vào tên...' value={text} onChange={(e)=>setText(e.target.value)}
                onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        setFlag(!flag)
                    }
                }}
                />
  )
}
