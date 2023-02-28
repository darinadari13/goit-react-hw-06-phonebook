import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  filter: ''

}

const contactsSlice = createSlice({
  
  name: "contacts",
  
  initialState,
 
  reducers: {
    addContact: (state, action) => {
      state.contacts = [action.payload, ...state.contacts]
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(c => c.id !== action.payload)
    },

    setFilter(state, action) {
      state.filter = action.payload;
    },
    
    handleFilterSlice: (state, actions) => {
      state.filter = actions.payload;
    },
  }
});


export const { addContact, deleteContact, setFilter, handleFilterSlice } = contactsSlice.actions;
 
export const contactsReducer = contactsSlice.reducer;