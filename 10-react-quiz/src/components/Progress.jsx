function Progress({ index, totalQuestion, points, maxPossiblePoints }) {
  return (
    <div className="progress">
      <p>
        Question: {index + 1}/{totalQuestion}{" "}
      </p>
      <p>
        Points: {points}/{maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
