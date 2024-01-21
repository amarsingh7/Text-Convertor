import React from 'react';

export default function Alert(props) {
  // Check if props.alert is null or undefined
  if (!props.alert) {
    return null; // Return null if alert is not present
  }

  return (
    <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong >{props.alert.type} </strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}
