import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  transition: all 250ms ease;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
  outline: none;
  align-self: center;
  padding: 4px 10px;
  font-size: 14px;
  &:hover,
  &:focus {
    background-color: orangered;
  }
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;
  margin-right: 5px;
`;

export const UserName = styled.p`
  margin-right: 10px;
`;

export const UserInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;