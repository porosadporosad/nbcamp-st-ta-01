import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { minusNum, plusNum } from "./redux/modules/calculator";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const total = useSelector((state) => state.calculator.number);
  const btnPlus = () => {
    dispatch(plusNum(number));
    setNumber("");
  };

  const btnminus = () => {
    dispatch(minusNum(number));
    setNumber("");
  };

  console.log(typeof total);
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={number}
          onChange={(event) => {
            const chagngeNum = parseInt(event.target.value);
            setNumber(chagngeNum);
          }}
        />{" "}
        만큼을 <button onClick={btnPlus}>더할게요</button>{" "}
        <button onClick={btnminus}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default App;
