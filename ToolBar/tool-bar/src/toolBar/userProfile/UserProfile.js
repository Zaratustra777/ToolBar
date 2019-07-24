import React from "react";
import {
  Img,
  ImgContainer,
  Container,
  InfoContainer,
  Name,
  StatusContainer,
  StatusTitle,
  StatusInfo,
  MenuContainer,
  VerticalDivider,
  Icon,
  NumberCircle,
  HSpacer,
  CoinContainer,
  CoinText,
  ExitRecord,
  ExitContainer
} from "./UserProfile.style";
import { PROFILE_PHOTO, BELL, COIN, LOGOUT } from "../../icons/icons";
import SvgContainer from "../../icons/SvgContainer";
import Menu from "./Menu";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: true,
    };
  }

  setLogIn = isLogIn => {
    this.setState({ isLogIn });
  };

  render() {
    const { isLogIn } = this.state;

    return isLogIn ? (
      <Container>
        <ImgContainer>
          <Img src={PROFILE_PHOTO} />
        </ImgContainer>
        <InfoContainer>
          <Name>Виолетта Фон Вейссенберг</Name>
          <StatusContainer>
            <StatusTitle>СТАТУС:</StatusTitle>
            <StatusInfo>Gold User</StatusInfo>
          </StatusContainer>
          <MenuContainer>
            <Icon>
              <NumberCircle>2</NumberCircle>
              <SvgContainer src={BELL} color="white" />
            </Icon>
            <HSpacer width="12px" />
            <VerticalDivider />
            <HSpacer width="5px" />
            <CoinContainer>
              <Icon>
                <SvgContainer src={COIN} color="white" />
              </Icon>
              <HSpacer width="5px" />
              <CoinText>250</CoinText>
            </CoinContainer>
            <HSpacer width="12px" />
            <VerticalDivider />
            <HSpacer width="5px" />

            <Menu logInCallBack={this.setLogIn} />
          </MenuContainer>
        </InfoContainer>
      </Container>
    ) : (
      <ExitContainer onClick={() => this.setLogIn(true)}>
        <SvgContainer src={LOGOUT} color="red" />
        <ExitRecord color="red">Войти</ExitRecord>
      </ExitContainer>
    );
  }
}

export default UserProfile;
