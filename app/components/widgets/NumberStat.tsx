import React from 'react';

const NumberStat: React.FC<{number: number}> = ({number}) => {
  return (
    <div>
      {number}
    </div>
  );
}

export default NumberStat;
