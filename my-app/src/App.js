import './App.css';
import { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  // 数字が増える 
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

  // リスト作成を押すとリストが1つずつ増える
  const [ countList, setCountList ] = useState(0);
  const [ createList, setCreateList ] = useState("");
  const increaseList = () => {
    setCountList(countList => countList + 1);
    const newList = [...createList, <tr> サンプル {countList + 1} </tr>]
    setCreateList(newList);
    // ReactDOM.render(newList, document.querySelector('tbody'));
    // const sampleTable = document.querySelector("table");
    // const index = sampleTable.rows.length;
    // const interCell = sampleTable.insertRow(index);
    // interCell.innerHTML = `サンプル ${index} `;
  };
  // useEffect(() => {
  //   ReactDOM.render(createList, document.querySelector('tbody'));
  // });
  const initialList = () => {
    setCountList(0);
    setCreateList("");
    // ReactDOM.render("", document.querySelector('tbody'));
    // const sampleTable = document.querySelector("table");
    // while (sampleTable.rows.length > 0) sampleTable.deleteRow(1);
  };

  // リスト数で指定した数リストが増える
  const [ numberCreateList, setNumberCreateList ] = useState("")
  const numberList = () => {
    const input = document.querySelector(".input");
    const number = input.value;
    console.log(number);
    for(let index=0; index<number; index++) {
      setNumberCreateList(numberCreateList => [...numberCreateList, <tr> サンプル </tr>]);
      console.log(index);
    };
  };
  const initialNumberList = () => {
    setNumberCreateList("");
    const input = document.querySelector(".input");
    input.value="";
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
            <tbody>{createList}</tbody>
          </table>
        </div>

        <div className='buttonClassList'>
          <button className='buttonList' onClick={numberList}>リスト作成</button>
          <button onClick={initialNumberList}>初期化</button>
        </div>
        <div className='resultList'>
          <p className='text'>リスト数</p>
          <input className='input' type="number" min="0" placeholder='数値を入力' defaultValue="数値を入力"></input>
        </div>
        <div className='list'>
          <table>
            <thead>
              <tr>
                <th>リスト</th>
              </tr>
            </thead>
            <tbody>{numberCreateList}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};
