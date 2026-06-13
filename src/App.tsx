import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [time, setTime] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(false);

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

  if (isLoginPage) {
    return <LoginPage />;
  }

  return (
    <MainPage
      time={time}
      onLogin={() => setIsLoginPage(true)}
    />
  );
}

export default App;