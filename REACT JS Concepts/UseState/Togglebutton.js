import React, { useState } from 'react';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? 'Hide' : 'Show'}
      </button>
      {isToggled && <p>Here is the hidden content!</p>}
    </div>
  );
}

export default ToggleButton;