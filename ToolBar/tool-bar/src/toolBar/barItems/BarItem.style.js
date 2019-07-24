import styled from "styled-components";

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

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 49px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Title = styled.div`
  font: 12px Arial, sans-serif;
  font-weight: bold;
  color: white;
`;

const Icon = styled.div`
  position: relative;
`;

const Line = styled.div`
  width: 90%;
  height: 1px;
  background-color: red;
  margin-top: 7px;
`;

const BarItemContainer = styled.div`
  display: flex;
`;

export { NumberCircle, Item, Title, Icon, Line, BarItemContainer };
