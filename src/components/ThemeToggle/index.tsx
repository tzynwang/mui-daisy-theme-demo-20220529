import React, { memo, useContext } from 'react';
import { ModeContext } from '@Components/App';

function ThemeToggle(): React.ReactElement {
  const context = useContext(ModeContext);

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
