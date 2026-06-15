import { login as authLogin } from "../services/authService"

export function useAuth() {
  const login = (
    userId: string,
    password: string
  ) => {
    console.log("useAuth");

    authLogin(userId, password);
  };

  return {
    login,
  };
}