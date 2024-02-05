import Cookies from "js-cookie";

async function authenticateUser(email, password) {
  // fake authentication
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@react.com" && password === "password") {
        resolve({ authToken: "authToken" });
      } else {
        reject("invalid credential");
      }
    }, 1000);
  });
}

async function handleLogin(email, password, authenticator, setAtom) {
  try {
    const { authToken } = await authenticator(email, password);
    Cookies.set("authToken", authToken, { httpOnly: true });
    setAtom(authToken);
  } catch (error) {
    console.error("Login failed:", error);
  }
}

async function handleLogout(setAtom) {
  Cookies.remove("authToken");
  setAtom(null);
}
