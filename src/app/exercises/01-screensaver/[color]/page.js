import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({ params: { color } }) {
  return (
    <main className='screen-saver-wrapper'>
      <ScreenSaver color={color} />
    </main>
  );
}

export default ScreenSaverExercise;
