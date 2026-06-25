export async function login(
  userId: string,
  password: string
) {
  const response = await fetch(
    "http://localhost:3000/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("ログイン失敗")
  }

  return response.json()
}