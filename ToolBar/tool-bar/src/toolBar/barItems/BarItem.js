import React from "react";
import SvgContainer from "../../icons/SvgContainer";
import { NumberCircle, Item, Title, Icon, Line } from "./BarItem.style";

class BarItem extends React.Component {
  clickHandler = e => {
    const { clickCallBack, id } = this.props;
    clickCallBack(id);
  };

  render() {
    const { src, notificationQuantity, title, selected } = this.props;
    const color = selected ? "red" : "white";

    return (
      <Item onClick={this.clickHandler}>
        <Icon>
          {notificationQuantity && (
            <NumberCircle>{notificationQuantity}</NumberCircle>
          )}
          <SvgContainer src={src} color={color} />
        </Icon>
        <Title>{title}</Title>
        {selected && <Line />}
      </Item>
    );
  }
}

export default BarItem;
