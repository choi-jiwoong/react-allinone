import React, { useState } from 'react'

export default function ControlledConpomponent() {

  const [value, setValue] = useState("");
  const [essay, setEssay] = useState("");
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {
    const name = event.target.name;
    if (name === "essay") setEssay(event.target.value);
    else if (name === "flavor") setFlavor(event.target.value);
    else if (name === "value") setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('A name was submitted: ' + value + essay + flavor);
    event.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label><br /><br />
      <label>
        Name:
        <input name="value" type="text" value={value} onChange={handleChange} />
      </label><br /><br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label> <br /><br />
      <input type="submit" value="Submit" />
    </form>
  )
}
