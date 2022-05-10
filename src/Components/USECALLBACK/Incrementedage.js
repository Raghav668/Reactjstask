import React from 'react';

function Incrementedage({func}) {
  return (<div>
      <button onClick={func}>Increment age</button>
      {console.log("Incremented age rendered")}
      </div>)
}

export default React.memo(Incrementedage);
