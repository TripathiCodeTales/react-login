import React from 'react';

export default function Form() {
  const options = ['+91', '+7', '+93'];
  function handleOnClick() {
    {
      // (e) => (e.target.value);
    }
  }

  return (
    <div>
      <input type="text" name="name" id="firstName" placeholder="FirstName*" />
      <input type="text" name="name" id="LastName" placeholder="LastName*" />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email*"
        required
      />
      <br />

      <select onChange={handleOnClick}>
        {options.map((option) => {
          return <option>{option}</option>;
        })}
        ;
      </select>
      <input
        type="phone"
        name="phoner"
        id="phone"
        placeholder="Phone*"
        required
      />
      <br />
    </div>
  );
}
