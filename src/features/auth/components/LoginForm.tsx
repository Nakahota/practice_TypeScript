import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

console.log("LoginForm描画");

function LoginForm() {

  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const result = await login(
        userId,
        password
      );

      navigate("/dashboard");

      alert("ログイン成功");
    } catch (error) {
      alert("ログイン失敗");
    }
  };

  return (
    <>
      <h2>ログイン画面</h2>

      <div>
        <input
          type="text"
          placeholder="ユーザー名"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleLogin}>
          ログイン実行
        </button>
      </div>
    </>
  );
}

export default LoginForm;