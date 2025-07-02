export default function SubmitButton({ dispatch }) {
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Submit
    </button>
  );
}
