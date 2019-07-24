import React from "react";
import {
  Dot,
  MenuPopUp,
  MenuPopUpContainer,
  MenuButton,
  MenuRecord,
  MenuRecordsContainer,
  Line,
  ExitContainer,
  ExitRecord
} from "./UserProfile.style";
import { LOGOUT } from "../../icons/icons";
import SvgContainer from "../../icons/SvgContainer";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exitColor: "black",
      showPopUp: false
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ showPopUp: false });
    }
  };

  exitMouseOverHandler = () => {
    this.setState({ exitColor: "red" });
  };

  exitMouseOutHandler = () => {
    this.setState({ exitColor: "black" });
  };

  menuClickHandler = () => {
    this.setState({ showPopUp: true });
  };

  logOutHandler = () => {
    this.props.logInCallBack(false);
  };

  render() {
    const { exitColor, showPopUp } = this.state;

    return (
      <MenuPopUpContainer>
        <MenuButton onClick={this.menuClickHandler}>
          <Dot />
          <Dot />
          <Dot />
        </MenuButton>
        {showPopUp && (
          <MenuPopUp ref={this.setWrapperRef}>
            <MenuRecordsContainer>
              <MenuRecord>Настройки профиля</MenuRecord>
              <MenuRecord>Мои покупки</MenuRecord>
              <MenuRecord>Мои подписки</MenuRecord>
              <MenuRecord>Служба поддержки</MenuRecord>
            </MenuRecordsContainer>
            <Line />
            <ExitContainer
              onMouseOver={this.exitMouseOverHandler}
              onMouseOut={this.exitMouseOutHandler}
              onClick={this.logOutHandler}
            >
              <SvgContainer src={LOGOUT} color={exitColor} />
              <ExitRecord color={exitColor}>Выйти</ExitRecord>
            </ExitContainer>
          </MenuPopUp>
        )}
      </MenuPopUpContainer>
    );
  }
}

export default Menu;
