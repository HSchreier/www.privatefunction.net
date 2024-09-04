// Flock.tsx (for multiple animated birds)
import React from 'react';
import Bird from './Bird';

const Flock: React.FC = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <Bird key={i} />
      ))}
    </>
  );
};

export default Flock;
