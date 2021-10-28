// import * as api from '../../services/api';
// import * as contactsActions from './contacts-actions';

// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactRequest());
//     try {
//         const contacts = await api.fetchContacts();
//         dispatch(contactsActions.fetchContactSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactError(error));
//     }
// };