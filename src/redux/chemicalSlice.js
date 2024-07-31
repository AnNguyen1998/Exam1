import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    chemical :[{id:1, name:"Hydrochloric", formula:"HCl"},
        {id:2, name:"Sodium Chloride", formula:"NaCl"},
        {id:3, name:"Sulfuric Acid", formula:"H2SO4"},
        {id:4, name:"Ammonia", formula:"NH3"},
        {id:5, name:"Ethanol", formula:"C2H5OH"}
    ]
}
const chemicalSlice = createSlice({
    name: 'chemical',
    initialState,
    reducers:{
        removebyID(state, action){
            state.chemical = state.chemical.filter(item => item.id!== action.payload)
            localStorage.setItem('chemical', JSON.stringify(state.chemical))
        },
        addChemical(state, action){
            state.chemical = [...state.chemical,{id:state.chemical.length+1, name:action.payload}]
            localStorage.setItem('chemical', JSON.stringify(state.chemical))
        },
        updateName(state, action){
            state.chemical = state.chemical.map(item => item.id === action.payload.id?{...item, name:action.payload.text}:item)
        },
        searchName(state, action){
            state.chemical = state.chemical.filter(item => (item.name == action.payload || item.formula == action.payload))
        }
    }
})

export const {removebyID, addChemical, updateName, searchName} = chemicalSlice.actions
export default chemicalSlice.reducer
