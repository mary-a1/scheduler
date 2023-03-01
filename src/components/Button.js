import React from "react";

import "components/Button.scss";
import classNames from "classnames";

/*
Props
Base uses no props 
Confirm uses the confirm prop 
Danger uses the danger prop 
Clickable uses the onClick prop 
Disabled uses the disabled prop 
*/
export default function Button(props) {

  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });

  return <><button className={buttonClass} onClick={props.onClick} disabled={props.disabled}>{props.children}</button></>;
}
