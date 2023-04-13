import { createSlice } from '@reduxjs/toolkit'

let initialState = { //const to let to make this modifiable
    value: 0,
}

//retrieve up what ever data we have stored in localStorage under the key - payload
const json = window.localStorage.getItem("payload");

//control flow to verify that retrieved value (exists and is not an empty string)
if (json !== null && json !== "") {
  const payload = JSON.parse(json);
  initialState.value = payload.counter.value;//initialState gets updated if the condition is true
}


export const counterSlice = createSlice({
  name: 'counter', //name of the slice
  initialState, //the starting variable
  reducers: { //how react should modify the state via the following actions
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions //exporting these actions to be used by the application

export default counterSlice.reducer //packaging it altogether