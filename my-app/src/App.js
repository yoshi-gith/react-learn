import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';

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
  const [ createList, setCreateList ] = useState("");
  const increaseList = () => {
    setCountList(countList => countList + 1);
    const newList = [...createList, <tr> サンプル </tr>]
    setCreateList(newList)
    ReactDOM.render(createList, document.querySelector('tbody'));
    // const sampleTable = document.querySelector("table");
    // const index = sampleTable.rows.length;
    // const interCell = sampleTable.insertRow(index);
    // interCell.innerHTML = `サンプル ${index} `;
  };
  const initialList = () => {
    setCountList(0);
    const sampleTable = document.querySelector("table");
    while (sampleTable.rows.length > 0) sampleTable.deleteRow(1);
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
            <thead>
              <tr>
                <th>リスト</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
}
