import express from "express";
import cors from "cors";

const app = express();

app.use(cors())
app.use(express.json());

app.post("/login", (req, res) => {

  console.log(req.body)

  const { userId, password } = req.body;

  if (
    userId === "admin" &&
    password === "password"
  ) {
    return res.json({
      success: true,
    });
  }

  return res.status(401).json({
    success: false,
  });
});

app.listen(3000, () => {
  console.log("Server Start")
});

app.get("/health", (_, res) => {
  res.json({
    status: "ok",
  });
});