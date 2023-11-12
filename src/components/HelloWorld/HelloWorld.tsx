import { useState } from 'react';

import styles from './HelloWorld.module.css';

interface HelloWorldProps {
  msg: string;
}

export default function HelloWorld(props: HelloWorldProps) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className={styles.HelloWorld}>
      <h1 data-testid="title" className="text-4xl font-bold underline mb-6">
        {props.msg}
      </h1>

      <button type="button" onClick={increment}>
        count is: {count}
      </button>
    </div>
  );
}
