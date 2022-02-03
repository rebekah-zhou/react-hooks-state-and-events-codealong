import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleOnClick() {
    setIsOn((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return (
    <button style={{ background: color }} onClick={handleOnClick}>{isOn ? 'ON': 'OFF'}</button>
  )}

export default Toggle;
