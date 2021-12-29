import './App.css';
import { useState } from 'react';

export const App = () => {
  const [ count, setCount ] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const reduce = () => {
    setCount(count - 1);
  };
  const initial = () => {
    setCount(count === 0);
  };
  
  
  return (
    <>
      <div className='container'>
        <div className='buttonClass'>
          <button onClick={increase}>プラス</button>
          <button onClick={reduce}>マイナス</button>
          <button onClick={initial}>初期化</button>
        </div>
        <div className='result'>
          <p className='text'>結果</p>
          <p className='count'>{count}</p>
        </div>
      </div>
    </>
  );
}
