import NextButton from "./NextButton";
import Options from "./Options";
import SubmitButton from "./SubmitButton";

function Question({ question, answer, dispatch, index, numQuestions }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {index + 1 < numQuestions ? (
        <NextButton dispatch={dispatch} />
      ) : (
        <SubmitButton dispatch={dispatch} />
      )}
    </div>
  );
}

export default Question;
