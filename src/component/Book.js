import { useNavigate } from "react-router-dom";
import "./button.css";

export default function Book(props) {
  const navigate = useNavigate();

  const SeatPicker = () => {
    const data = { title: props.title };
    navigate("/Picker", { state: data });
  };

  return (
    <div>
      <div className="btn">
        <button onClick={SeatPicker}>Book</button>
      </div>
    </div>
  );
}
