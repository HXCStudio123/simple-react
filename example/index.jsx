import React from '../packages/react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>count: {count}</div>
    </div>
  )
}

const container = document.querySelector('#app');
React.render(<Counter />, container);
