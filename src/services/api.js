import axios from "axios";
import * as actions from "../redux/contacts/contacts-actions";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setToken = (token) => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const errorNotice = () =>
  toast.error("The request couldn't be processed.");

export const fetchContacts = (token) => (dispatch) => {
  setToken(token);
  dispatch(actions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then((response) => {
      dispatch(actions.fetchContactsSuccess(response.data));
    })
    .catch(() => {
      dispatch(actions.fetchContactsError());

      if (!token) {
        return;
      }

      errorNotice();
    });
};

export const postContact = (contact, token) => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .post("/contacts", {
      ...contact,
    })
    .then(function (response) {
      if (response.status === 201) {
        dispatch(fetchContacts());
      }
    })
    .catch(function () {
      dispatch(actions.fetchContactsError());

      if (!token) {
        return;
      }

      errorNotice();
    });
};

export const deleteContact = (id, token) => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(function (response) {
      if (response.status === 200) {
        dispatch(fetchContacts());
      }
    })
    .catch(function () {
      dispatch(actions.fetchContactsError());

      if (!token) {
        return;
      }
      errorNotice();
    });
};