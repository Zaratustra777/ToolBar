import React from "react";
import ReactSVG from "react-svg";

class SvgContainer extends React.Component {
  render() {
    const { color, src } = this.props;
    return (
      <ReactSVG
        src={src}
        beforeInjection={svg => {
          svg.setAttribute("style", `fill: ${color}; `);
          svg.children &&
            [...svg.children].forEach(el =>
              el.setAttribute("style", `fill: ${color}; `)
            );
        }}
      />
    );
  }
}

export default SvgContainer;
