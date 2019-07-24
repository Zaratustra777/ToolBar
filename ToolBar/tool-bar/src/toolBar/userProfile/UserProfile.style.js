import styled from "styled-components";

const Img = styled.img`
  top: -8px;
  left: -10px;
  position: relative;
  width: auto;
  height: 120px;
`;

const ImgContainer = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border: 2px solid white;
  border-radius: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
`;

const InfoContainer = styled.div`
  margin-left: 7px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: white;
  font-weight: bold;
  font: 14px Arial, sans-serif;
`;

const StatusTitle = styled(Name)`
  opacity: 0.5;
`;

const StatusInfo = styled.div`
  color: gold;
  font-weight: bold;
  font: 12px Arial, sans-serif;
  margin-left: 3px;
`;

const StatusContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

const VerticalDivider = styled.div`
  height: 12px;
  width: 1px;
  background-color: white;
  opacity: 0.5;
`;

// todo move to global style
const HSpacer = styled.div`
  height: 0px;
  width: ${props => props.width};
`;

const Icon = styled.div`
  position: relative;
`;

const NumberCircle = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 3px;
  background: red;
  color: white;
  text-align: center;
  font: 10px Arial, sans-serif;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CoinText = styled.div`
  color: white;
  font-weight: bold;
  font: 12px Arial, sans-serif;
  padding-bottom: 3px;
`;

const MenuButton = styled.div`
  display: flex;
  cursor: pointer;
  height: 14px;
  align-items: center;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  margin-left: 3px;
`;

const MenuPopUp = styled.div`
  width: 180px;
  height: 220px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  background-color: white;
  position: absolute;
  left: -127px;
  border-radius: 3px;
  top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 130px;
    bottom: 95%;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid white;
    border-left: 8px solid white;
    border-right: 8px solid transparent;
    border-radius: 2px;
    transform: rotate(45deg);
  }
`;

const MenuRecordsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MenuRecord = styled.div`
  margin-top: 20px;
  color: black;
  font: 14px Arial, sans-serif;
  &:hover {
    color: red;
  }
  cursor: pointer;
`;

const ExitRecord = styled.div`
  color: black;
  margin-left: 10px;
  font: 14px Arial, sans-serif;
  color: ${props => props.color};
  margin-right: 60px;
`;

const Line = styled.div`
  width: 70%;
  height: 1px;
  background-color: black;
  opacity: 0.1;
  margin-top: 18px;
`;

const MenuPopUpContainer = styled.div`
  position: relative;
`;

const ExitContainer = styled.div`
  margin-top: 18px;
  flex-direction: row;
  display: flex;
  cursor: pointer;
`;

export {
  ExitContainer,
  Container,
  Img,
  ImgContainer,
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
  MenuButton,
  Dot,
  MenuPopUp,
  MenuPopUpContainer,
  MenuRecord,
  MenuRecordsContainer,
  Line,
  ExitRecord
};
