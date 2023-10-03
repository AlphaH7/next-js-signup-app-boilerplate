/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
// @ts-nocheck
import { type ReactNode, useEffect, useRef, useState } from 'react';
import TRUNK from 'vanta/dist/vanta.trunk.min';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
  disableAnimation?: boolean;
};

const Main = (props: IMainProps) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(false);
  const myRef = useRef(null);
  const { disableAnimation = false } = props;
  useEffect(() => {
    // As the window object in next JS is not available until load,
    // and is required by p5.js to sketch hence made an import here
    // instead.
    const p5 = require('p5');
    if (
      !vantaEffect &&
      myRef.current &&
      !disableAnimation &&
      window &&
      typeof window !== undefined
    ) {
      setTimeout(() => {
        setFirstLoad(true);
        setVantaEffect(
          TRUNK({
            el: myRef.current,
            p5,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            chaos: 10.0,
          })
        );
      }, 2000);
    } else {
      setFirstLoad(true);
    }
  }, [vantaEffect]);

  return (
    <div className="h-full max-h-screen min-h-screen w-full overflow-auto px-1 text-gray-700 antialiased">
      <div
        className={`animate-opacity absolute left-0 h-full w-full ${
          firstLoad ? '' : 'scale-75 opacity-0'
        }`}
        ref={myRef}
      />
      {props.meta}

      <div
        className={`"mx-auto animate-main h-full min-h-full max-w-screen-md ${
          firstLoad ? '' : 'opacity-0'
        }`}
      >
        <main className="absolute left-0 top-0 flex min-h-screen w-full flex-col items-center justify-center">
          {props.children}
        </main>
      </div>
      <p className="animate-opacity absolute bottom-0 left-0 w-full pb-2 text-center text-white">
        Made with ♥ by{' '}
        <a
          className="text-white"
          target="_blank"
          href="https://www.alistier.dev"
        >
          Alistier X.
        </a>
        .
      </p>
    </div>
  );
};

export { Main };
