import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleValueChange}>{props.text}</button>
);
const Result = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleValueChange = (vote) => {
    return () => {
      if (vote === "good") {
        setGood(good + 1);
      } else if (vote === "neutral") {
        setNeutral(neutral + 1);
      } else if (vote === "bad") {
        setBad(bad + 1);
      }
    };
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text={"Good"} handleValueChange={handleValueChange("good")} />
        <Button
          text={"Neutral"}
          handleValueChange={handleValueChange("neutral")}
        />
        <Button text={"Bad"} handleValueChange={handleValueChange("bad")} />
      </div>
      <h2>Statistics</h2>
      <div>
        <Result text={"Good"} value={good} />
        <Result text={"Neutral"} value={neutral} />
        <Result text={"Bad"} value={bad} />
      </div>
    </div>
  );
};

export default App;
