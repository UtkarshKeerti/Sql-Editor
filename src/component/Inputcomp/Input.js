import "./input.css";
const Input = ({ inputFieldData, setInputFieldData }) => {

  return (
    <div className="inputmain">
      <p>
        <b>INPUT</b>
      </p>
      <div className="inputCont">
        <textarea
          value={inputFieldData}
          onChange={(e) => setInputFieldData(e.target.value)}
          className="inputfield"
        />

      </div>
    </div>
  );
};

export default Input;
