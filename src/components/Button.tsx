import React from "react";
export function Button(props: {
  title: string;
  onClick: (ev: React.MouseEvent) => void;
}) {
  return <button onClick={props.onClick}>{props.title}</button>;
}
