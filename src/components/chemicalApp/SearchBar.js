import React, {useState} from 'react'
import {Input} from 'reactstrap'

export default function SearchBar(props) {
    const {search} = props
    const [text, setText] = useState("")
  return (
    <Input className='searchbar' type='text' value={text} placeholder='Nhập hóa chất cần tìm...' 
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    search(text)
                    setText("")
                }
            }}
    />
  )
}
