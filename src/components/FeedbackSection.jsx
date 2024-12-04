import Button from "./Button";
import { useState, useRef } from "react";

function StateVsREf() {
  const input = useRef();
  const [show,setShow] = useState(false)

    function HandleKeyDown (event){
        if(event.key === "Enter"){
            setShow(true);
        } 
    }

  return (
    <div>
      <h3>input value {show && input.current.value}</h3>
      <input ref={input} 
      onKeyDown = {HandleKeyDown}
      type="text" 
      className="control" 
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("normal");
  const [hasError, setHasError] = useState(false);

  function HandleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  function HandleReasonChange(event) {
    setReason(event.target.value);
  }

  return (
    <div>
      <h3>Оставьте свой отзыв</h3>
      <form>
        <label htmlFor="name">Тестовый инпут для формы</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={HandleNameChange}
          style={{
            border: hasError ? " 1px solid red" : null,
          }}
        />

        <label htmlFor="reason">Какой-то выбор</label>
        <select id="reason" value={reason} onChange={HandleReasonChange}>
          <option value="good">Отлично</option>
          <option value="normal">Средне</option>
          <option value="bad">Плохо</option>
        </select>

        <pre>
          name {name}
          <br />
          reason {reason}
        </pre>
        <Button disabled={hasError} isActive={!hasError}>
          Отправить
        </Button>
      </form>
      <hr />
      <StateVsREf />
    </div>
  );
}
