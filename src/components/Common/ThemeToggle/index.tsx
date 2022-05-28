import React, { memo, useContext } from 'react';
import ModeContext from '@Components/Base/ModeContext';

function ThemeToggle(): React.ReactElement {
  /* States */
  const context = useContext(ModeContext);

  /* Main */
  return (
    <div>
      Current theme: {context ? context.mode : null}
      <button
        onClick={() =>
          context?.setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        change theme
      </button>
    </div>
  );
}

export default memo(ThemeToggle);
