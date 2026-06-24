import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

console.log("LoginForm描画");

function LoginForm() {

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {

    if (!userId) {
      setErrorMessage(
        "ユーザIDを入力してください。"
      );
      return;
    }

    if (!password) {
      setErrorMessage(
        "パスワードを入力してください。"
      )
    }

    try {
      await login(userId, password);

      localStorage.setItem("userId", userId);

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        "ユーザIDまたはパスワードが違います。"
      )
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