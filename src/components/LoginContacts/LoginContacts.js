import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selector";
import { Form, Input, Label, Button } from "./LoginContacts.styles.js";
import { ToastContainer, toast } from "react-toastify";

export default function LoginContacts() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const error = authSelectors.getAuthError(state);
  const toastId = useRef(null);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const errorNotification = () =>
    (toastId.current = toast.error("Операция провалена. Попробуйте снова.", {
      toastId: "loginNotice",
    }));
  const dismiss = () => toast.dismiss(toastId.current);

  const onChange = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        return setEmail(e.target.value);

      case "password":
        return setPassword(e.target.value);

      default:
        return;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    dispatch(auth.logIn(credentials));
    reset();
  };

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
      <Form onSubmit={onSubmit}>
        <Label>
          Почта
          <Input
            onChange={onChange}
            type="email"
            value={email}
            name="email"
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            title="Ожидается адрес электронной почты"
            required
          />
        </Label>
        <Label>
          Пароль
          <Input
            onChange={onChange}
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Пароль содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов"
            value={password}
            required
          />
        </Label>
        <Button type="submit">Авторизация</Button>
      </Form>
      <ToastContainer />
    </>
  );
}