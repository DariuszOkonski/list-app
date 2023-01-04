import React from "react";
import Dialog from "./Dialog";

export default function ConfirmDialog(props) {
  return (
    <Dialog title={props.title}>
      {props.children}
      <hr />
      <button>Yes</button>
      <button>No</button>
    </Dialog>
  );
}
