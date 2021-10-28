import styled from "styled-components";

export const Panel = styled.div`
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    position: relative;
    left: 0;
    top: 10px;
    background-color: rgb(255, 102, 0);
    border-radius: 2px;
    z-index: 100;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80vw;
  padding: 0px 50px;
`;

export const NavItem = styled.li`
  &:first-child {
    margin-right: 25px;
  }
`;