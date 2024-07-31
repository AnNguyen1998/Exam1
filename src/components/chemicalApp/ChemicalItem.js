import React, {useState} from 'react'
import {Button} from 'reactstrap'
import EditChemical from './EditChemical'
import {useDispatch} from 'react-redux'

export default function ChemicalItem(props) {
  const dispatch = useDispatch()
    const {chemical, deletebyId} = props
    const [flag,setFlag]= useState(false)
    const updateName = (text)=>{
      dispatch(updateName(text))
    }
  return (
    
          <tr>
            <th scope="row">
              {chemical.id}
            </th>
            <td onDoubleClick={()=>setFlag(!flag)}>
                {
                !flag?<p>{chemical.name}</p>:<EditChemical flag={flag} setFlag={setFlag} updateName={updateName}/>
                }
            </td>
            <td>
            {chemical.formula}
            </td>
            <td>
            <Button className='btndel' color='danger' onClick={()=>deletebyId(chemical.id)}>Delete</Button>
            </td>
          </tr>
  )
}
