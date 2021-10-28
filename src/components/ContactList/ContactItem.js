import React from "react";
import { Item, Button } from "./ContactItem.styles";
import { deleteContact } from "../../services";
import { useDispatch, useSelector } from "react-redux";

const ContactItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  return contacts.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button
          onClick={() => dispatch(deleteContact(id, token))}
          type="button"
        >
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;