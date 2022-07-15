import React from "react";
import { toast } from "react-toastify";
import { css } from "styled-components";
import "./Toast.css";

function Toast(props) {
  const { data } = props;
  const notify = () => {
    toast.success("Succesfully Booked");
  };
  return (
    <div className="GeeksforGeeks">
      <button onClick={notify} disabled={data > 0 ? false : true}>
        Book Now
      </button>
    </div>
  );
}

export default Toast;
