import { useState, useEffect } from 'react';

const HooksComp = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <div>
      <h1>Hooks</h1>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>{'<'}</button>
      <button onClick={() => setCount(count - 1)}>{'>'}</button>
    </div>
  );
};

export default HooksComp;
