import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEx = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={['Welcome to Chill Gamer!', 'Enjoy Your Stay!','Share Your Mind']}
          loop={5}
          cursor
          cursorStyle='🎲'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypewriterEx;
