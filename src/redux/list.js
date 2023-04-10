import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    field: "Add a note", //this will hold the users input, currently showing a default value
    items: [ //user inputs will populate to this array
        "Lazy dog",
        "Quick brown fox"
    ]
}

export const listSlice = createSlice({
  name: 'list', //name of the slice
  initialState, //the starting variable
  reducers: { //how react should modify the state via the following actions

    //creating a new action
    define: (state, action) => {
        state.field = action.payload; //asking react - hey do you know your current field? Replace it with what user has provided
    },

    add:(state, action) => {
      state.items.push(action.payload)//Why do we have state.items? why state?
    },

    remove:(state, action) => {
        state.items.splice(action.payload,1);//action.payload is what is refered to as the parameter value provided
    }
  }
})

// Action creators are generated for each case reducer function
export const { define, add, remove } = listSlice.actions //exporting these actions to be used by the application

export default listSlice.reducer //packaging it altogether