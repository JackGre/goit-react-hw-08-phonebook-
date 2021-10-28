import React, { useState, useEffect, useRef } from 'react';
import authOperation from '../../redux/auth/auth-operations';
import authSelector from '../../redux/auth/auth-selector';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Form, Input, Label, Button } from "./RegisterForm.styles.js";


export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

    const state = useSelector((state) => state);
    const error = authSelector.getAuthError(state);
    const toastId = useRef(null);
  
    const reset = () => {
        setName("");
        setEmail("");
        setPassword("");
        
    };

    const handleChange = (e) => {
        switch (e.currentTarget.name) {
            case 'name':
                return setName(e.target.value);
            case 'email':
                return setEmail(e.target.value);
            case 'password':
                return setPassword(e.target.value);
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const credentials = {
        email,
        password,
        name,
      }; 

      dispatch(authOperation.register(credentials));
      reset();

  }
    const errorNotification = () =>
    (toastId.current = toast.error("Операция провалена. Попробуйте снова.", {
      toastId: "loginNotice",
    }));
  const dismiss = () => toast.dismiss(toastId.current);

 

    useEffect(() => {
        if (error) {
            errorNotification();
        }
        return () => {
            dismiss();
        };
    }, [error]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Почта
          <Input
            onChange={handleChange}
            type="email"
            value={email}
            name="email"
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Ожидается адрес электронной почты"
            required
          />
        </Label>
        <Label>
          Имя
          <Input
            onChange={handleChange}
            type="text"
            value={name}
            name="name"
            title="Указано неверное имя."
            required
          />
        </Label>
        <Label>
          Пароль
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Пароль содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
            value={password}
            required
          />
        </Label>
        <Button type="submit">Зарегистрироваться</Button>
      </Form>
      <ToastContainer />
    </>
  );  

}