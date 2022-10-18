import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => (
  <tr>
    <td> {props.text} </td>
    <td>
      {" "}
      {props.value} {props.text2}{" "}
    </td>
  </tr>
);

const Statistics = (props) => {
  const { positive, neutral, negative } = props;
  const total = positive + neutral + negative;

  if (total === 0) {
    return (
      <p>
        No Feedback yet, click on one of the buttons above to give feedback.
      </p>
    );
  }

  const averageRating = (
    (positive * 1 + neutral * 0 + negative * -1) /
    total
  ).toFixed(1);
  const positiveRating = ((positive / total) * 100).toFixed(1);

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="positive" value={positive} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="negative" value={negative} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={averageRating} />
          <StatisticLine text="positive" value={positiveRating} text2="%" />
        </tbody>
      </table>
    </div>
  );
};

// the root component
const App = () => {
  const [positive, setpositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setnegative] = useState(0);

  const setTopositive = () => setpositive(positive + 1);
  const setToNeutral = () => setNeutral(neutral + 1);
  const setTonegative = () => setnegative(negative + 1);

  return (
    <div>
      <h1>Feedback</h1>
      <Button handleClick={setTopositive} text="positive" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setTonegative} text="negative" />
      <h1>Statistics</h1>
      <Statistics positive={positive} neutral={neutral} negative={negative} />
    </div>
  );
};

export default App;
