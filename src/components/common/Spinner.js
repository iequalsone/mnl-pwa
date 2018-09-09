import React from "react";

const Spinner = () => {
  return (
    <div style={Style.ContainerStyle} className="text-center">
      <i style={Style.IconStyle} className="fa fa-cog fa-5x fa-spin" aria-hidden="true" />
    </div>
  );
};

const Style = {
  ContainerStyle: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  IconStyle: {
    color: "#9b9c9f",
  }
};

export default Spinner;
