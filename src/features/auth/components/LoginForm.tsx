import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

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
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    setUserIdError("");
    setPasswordError("");

    let hasError = false;

    if (!userId) {
      setUserIdError(
        "ユーザIDを入力してください。"
      );
      hasError = true;
    }

    if (!password) {
      setPasswordError(
        "パスワードを入力してください。"
      );
      hasError = true;
    }

    if (hasError) {
      return
    }

    try {
      await login(userId, password);

      localStorage.setItem("userId", userId);

      navigate("/dashboard");
    } catch (error) {
      setPasswordError(
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
          onChange={(e) => {
            setUserId(e.target.value);
            setUserIdError("");
          }}
        />
      </div>

      {userIdError && (
        <p className="error-message">
          {userIdError}
        </p>
      )}

      <div>
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
      </div>

      {passwordError && (
        <p className="error-message">
          {passwordError}
        </p>
      )}

      <div>
        <button onClick={handleLogin}>
          ログイン実行
        </button>
      </div>
    </>
  );
}

export default LoginForm;