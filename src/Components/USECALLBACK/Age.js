import React from 'react';

function Age({value}) {
  return (
        <div>
            {value}
            {console.log("Age rendered")}
        </div>
  )
}

export default React.memo(Age);
