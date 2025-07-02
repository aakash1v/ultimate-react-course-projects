import RestartButton from "./RestartButton";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div>
      <p className="result">
        you got {points}/ {maxPossiblePoints} ({Math.ceil(percentage)}%){" "}
      </p>
      <p className="highscore">highscore: {highscore}</p>
      <RestartButton dispatch={dispatch} />
    </div>
  );
}

export default FinishScreen;
