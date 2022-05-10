import React from 'react';

function Salary({value}) {
  return (
    <div>
        {value}
      {console.log("salary rendered")}
      </div>
  )
}

export default React.memo(Salary)
