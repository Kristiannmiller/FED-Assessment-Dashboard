import { useState } from "react";

function ScoreForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");
  };

  return (
    <div className="form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ScoreForm;
