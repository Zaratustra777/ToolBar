import React from "react";
import { BarItemContainer as BarItemmContainerStyled } from "./BarItem.style";
import BarItem from "./BarItem";
import { CALENDAR, JOURNAL, PROGRESS, SHOP, TALK } from "../../icons/icons";

class BarItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [true, false, false, false, false]
    };
  }

  selectItemHandler = id => {
    console.log(id);
    this.setState({
      selected: this.state.selected.map((el, index) =>
        index !== id ? false : true
      )
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <BarItemmContainerStyled>
        <BarItem
          src={JOURNAL}
          title="ЖУРНАЛ"
          clickCallBack={this.selectItemHandler}
          selected={selected[0]}
          id={0}
        />
        <BarItem
          src={TALK}
          title="ОБЩЕНИЕ"
          notificationQuantity={2}
          clickCallBack={this.selectItemHandler}
          selected={selected[1]}
          id={1}
        />
        <BarItem
          src={CALENDAR}
          title="КАЛЕНДАРЬ"
          clickCallBack={this.selectItemHandler}
          selected={selected[2]}
          id={2}
        />
        <BarItem
          src={SHOP}
          title="МАГАЗИН"
          notificationQuantity={2}
          clickCallBack={this.selectItemHandler}
          selected={selected[3]}
          id={3}
        />
        <BarItem
          src={PROGRESS}
          title="ДОСТИЖЕНИЯ"
          clickCallBack={this.selectItemHandler}
          selected={selected[4]}
          id={4}
        />
      </BarItemmContainerStyled>
    );
  }
}

export default BarItemsContainer;
