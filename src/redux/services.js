import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: `https://63aea915cb0f90e51460bca4.mockapi.io/contacts`,
});

export const fetchAllContacts = async () => {
  const { data } = await contactsAPI.get();
  return data;
};

export const fetchAddContacts = async contact => {
  const { data } = await contactsAPI.post('', contact);
  return data;
};

export const fetchDeleteContacts = async contactId => {
  const { data } = await contactsAPI.delete(`/${contactId}`);
  return data;
};
