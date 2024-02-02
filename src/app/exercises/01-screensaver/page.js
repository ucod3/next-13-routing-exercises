import React from 'react';
import Link from 'next/link';

function ScreenSaverMainPage() {
  return (
    <main className='screen-saver-wrapper'>
      <h1>Choose your color:</h1>
      <ul>
        <li>
          <Link href='/exercises/01-screensaver/red'>Red</Link>
        </li>
        <li>
          <Link href='/exercises/01-screensaver/blue'>Blue</Link>
        </li>
        <li>
          <Link href='/exercises/01-screensaver/green'>Green</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverMainPage;
