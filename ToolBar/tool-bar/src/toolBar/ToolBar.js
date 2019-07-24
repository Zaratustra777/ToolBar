import React from "react";
import { LOGO } from "../icons/icons";
import { ToolBar as ToolBarStyled, Logo } from "./ToolBar.style";
import SvgContainer from "../icons/SvgContainer";
import BarItemContainer from "./barItems/BarItemsContainer";
import UserProfile from "./userProfile/UserProfile";

class ToolBar extends React.Component {
  render() {
    return (
      <ToolBarStyled>
        <Logo>
          <SvgContainer color="white" src={LOGO} />
        </Logo>
        <BarItemContainer />
        <UserProfile />
      </ToolBarStyled>
    );
  }
}

export default ToolBar;
