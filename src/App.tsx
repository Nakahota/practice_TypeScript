import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import DashBoardPage from "./pages/DashBoardPage";

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
    <Routes>
      <Route
        path="/"
        element={<MainPage time={time} />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/dashboard"
        element={<DashBoardPage />}
      />
    </Routes>
  );
}

export default App;