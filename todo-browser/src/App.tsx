import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("ja-JP", {
          hour12: false,
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>自作アプリ</h1>

      <div>{time}</div>

      <button
        onClick={() => {
          window.location.href = "login.html";
        }}
      >
        ログイン
      </button>
    </>
  );
}

export default App;