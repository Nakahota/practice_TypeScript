import { useNavigate } from "react-router-dom";

type Props = {
  time: string;
};

function MainPage({ time }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <h1>自作アプリ</h1>

      <div>{time}</div>

      <button onClick={() => navigate("/login")}>
        ログイン
      </button>
    </>
  );
}

export default MainPage;