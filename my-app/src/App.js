import './App.css';
import { useState } from 'react';

export const App = () => {
  const [ count, setCount ] = useState(0);
  const increase = () => {
    setCount(count => count + 1);
  };
  const reduce = () => {
    setCount(count => count - 1);
  };
  const initial = () => {
    setCount(0);
  };

  const [ countList, setCountList ] = useState(0);
  const increaseList = () => {
    setCountList(countList => countList + 1);
    const sampleTable = document.querySelector("table");
    const index = sampleTable.rows.length;
    sampleTable.insertRow(index);
  };
  const initialList = () => {
    setCountList(0);
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

        <div className='buttonClassList'>
          <button className='buttonList' onClick={increaseList}>リスト作成</button>
          <button onClick={initialList}>初期化</button>
        </div>
        <div className='resultList'>
          <p className='text'>リスト数</p>
          <p className='count'>{countList}</p>
        </div>
        <div className='list'>
          <table>
            <tr>
              <th>リスト</th>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
