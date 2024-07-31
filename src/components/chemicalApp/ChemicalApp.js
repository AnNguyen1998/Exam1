import React ,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Table } from 'reactstrap'
import './chemical.css'
import { addChemical, removebyID, searchName } from '../../redux/chemicalSlice'
import ChemicalItem from './ChemicalItem'
import AddChemical from './AddChemical'
import SearchBar from './SearchBar'

export default function ChemicalApp() {
  const { chemical } = useSelector(state => state.chemical)
  const dispatch = useDispatch()
  const [localchemical, setChemical] = useState([])

  useEffect(()=>{
    if(localStorage.getItem("chemical")){
      return setChemical(JSON.parse(localStorage.getItem("chemical")))
    }
    setChemical(chemical)
  },[chemical])
  
  const deletebyId = (id)=>{
    dispatch(removebyID(id))
  }
  const addName = (text)=>{
    //e.preventDefault()
    console.log("addname")
    dispatch(addChemical(text))
  }
  const search = (text)=>{
    console.log("search")
    dispatch(searchName(text))
  }
  return (
    <Container>
      <h1>Danh sách các hợp chất hóa học</h1>
      <p>Thêm hóa chất:</p>
      <AddChemical addName={addName}/>
      <p className='pp'>Tìm kiếm:</p>
      <SearchBar search={search}/>
      <Table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              Name
            </th>
            <th>
              Formula
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {
          localchemical.map((item, index) => (
            <ChemicalItem key={index} chemical={item} deletebyId={deletebyId}/>
          ))
        }
        </tbody>
      </Table>
    </Container>
  )
}
