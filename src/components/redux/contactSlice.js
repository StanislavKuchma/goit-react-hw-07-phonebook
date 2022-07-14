import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

    filter: '',
  },
  reducers: {
    formSubmitHandler(state, { payload }) {
      const filterContact = payload.name.toLocaleLowerCase();
      // console.log(filterContact);
      const contactsForFind = state.contacts.find(
        i => i.name.toLocaleLowerCase() === filterContact
      );
      if (contactsForFind) {
        window.alert(`${payload.name} is already in contacts`);
        return;
      }
      state.contacts.push(payload);
    },

    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { formSubmitHandler, changeFilter, deleteContact } =
  contactSlice.actions;
export const contacts = contactSlice.reducer;
