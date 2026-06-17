import { login as authLogin } from "../services/authService"

export function useAuth() {
  const login = async (
    userId: string,
    password: string
  ) => {
    console.log("useAuth");

    const result = await authLogin(userId, password);

    console.log(result)
  };

  return {
    login,
  };
}