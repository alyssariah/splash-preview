'use client';
import Typewriter from 'typewriter-effect';

export interface TyperwriterCompProps {
  strings: Array<string>;
}

function TypewriterComp({ strings }: TyperwriterCompProps) {
  return (
    <>
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          delay: 50,
        }}
      />
    </>
  );
}

export default TypewriterComp;
