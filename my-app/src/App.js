import './App.css';

export const App = () => {
  return (
    <>
      <div className='container'>
        <div className='buttonClass'>
          <button>プラス</button>
          <button>マイナス</button>
          <button>初期化</button>
        </div>
        <div className='result'>
          <p className='text'>結果</p>
          <p className='count'>5</p>
        </div>
      </div>
    </>
  );
}
