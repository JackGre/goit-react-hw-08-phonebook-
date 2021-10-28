import React from "react";
import { useSelector } from "react-redux";
import { UserInfo, UserName, Button } from "./UserMenu.styles";
import authSelector from "../../redux/auth/auth-selector";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/auth-operations";
// import avatar from "Images/avatar.png";

export default function UserMenu() {
  const userName = useSelector((state) => authSelector.getUserName(state));
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(authOperation.logOut());
  };

  return (
    <UserInfo>
      {/* <Avatar alt="avatar" src={avatar} width={30} height={30} /> */}
      <UserName>Добро пожаловать, {userName}</UserName>
      <Button onClick={() => onBtnClick()} type="button">
        Выйти
      </Button>
    </UserInfo>
  );
}