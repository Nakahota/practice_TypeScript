import { useNavigate } from "react-router-dom";

function DashBoardPage() {

  const userId = localStorage.getItem("userId")
  const password = localStorage.getItem("password")
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
      <p>{password}</p>

      
      <button onClick={handleLogout}>
        ログアウト
      </button>
    </>
  );
}

export default DashBoardPage;