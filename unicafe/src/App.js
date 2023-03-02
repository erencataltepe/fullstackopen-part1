import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleValueChange}>{props.text}</button>
);
const Result = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics</h2>
      <div>
        <Result text={"Good"} value={props.good} />
        <Result text={"Neutral"} value={props.neutral} />
        <Result text={"Bad"} value={props.bad} />
        <div>all {props.total}</div>
        <div>average {props.average}</div>
        <div>positive {props.positive} %</div>
      </div>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleValueChange = (vote) => {
    let newGood = good;
    let newBad = bad;
    let newNeutral = neutral;
    return () => {
      if (vote === "good") {
        newGood++;
        setGood(newGood);
      } else if (vote === "neutral") {
        newNeutral++;
        setNeutral(newNeutral);
      } else if (vote === "bad") {
        newBad++;
        setBad(newBad);
      }
      calculateExtraStatistics(newGood, newNeutral, newBad);
    };
  };

  const calculateExtraStatistics = (newGood, newNeutral, newBad) => {
    const newTotal = newGood + newBad + newNeutral;
    const newAverage = (newGood * 1 + newNeutral * 0 + newBad * -1) / newTotal;
    const positiveFeedbackPercentage = (newGood / newTotal) * 100;
    setTotal(newTotal);
    setAverage(newAverage);
    setPositive(positiveFeedbackPercentage);
    console.log(newTotal);
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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
