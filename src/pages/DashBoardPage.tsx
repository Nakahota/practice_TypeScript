import { useNavigate } from "react-router-dom";

function DashBoardPage() {

  const userId = localStorage.getItem("userId")
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  }

  return (
    <>
      <h1>ダッシュボード</h1>

      <p>ログインに成功しました！</p>
      <p>{userId}</p>
      
      <button onClick={handleLogout}>
        ログアウト
      </button>
    </>
  );
}

export default DashBoardPage;