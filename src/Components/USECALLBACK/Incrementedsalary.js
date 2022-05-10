import React from 'react';

function Incrementedsalary({func}) {
  return (<div>
      <button onClick={func}>Increment salary</button>
      {console.log("Incremented salary rendered")}</div>)
}

export default React.memo(Incrementedsalary);
