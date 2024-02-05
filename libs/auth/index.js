import Cookies from "js-cookie";
import { atom } from "recoil";

export const authToken = atom({ key: "auth-token", default: null });

async function authenticateUser(email, password) {
  // fake authentication
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@react.com" && password === "password") {
        resolve({ authToken: "sessionId=38afes7a8" });
      } else {
        reject("invalid credential");
      }
    }, 1000);
  });
}

export async function handleLogin(email, password, setAtom) {
  try {
    const { authToken } = await authenticateUser(email, password);
    setAtom(authToken);
    Cookies.set("authToken", authToken, {
      httpOnly: true,
      sameSite: "None",
    });
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export async function handleLogout(setAtom) {
  Cookies.remove("authToken");
  setAtom(null);
}
