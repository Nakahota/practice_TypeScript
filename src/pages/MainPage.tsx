type Props = {
  time: string;
  onLogin: () => void;
};

function MainPage({ time, onLogin }: Props) {
  return (
    <>
      <h1>自作アプリ</h1>

      <div>{time}</div>

      <button onClick={onLogin}>
        ログイン
      </button>
    </>
  );
}

export default MainPage;