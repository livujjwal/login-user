import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

//pass hbingley1 CQutx25i8r

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  console.log(username, password);

  function handleSubmit() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        localStorage.setItem("userObject", JSON.stringify(data));
        localStorage.setItem("id", JSON.stringify(data.id));
      });
  }
  console.log(user);
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      {user && <Navigate to={"/profile"}></Navigate>}
      <div className="flex  flex-col shadow-xl p-12 gap-1">
        <p className="text-left text-xs text-gray-600">Welcome back! 👋</p>
        <h1 className="font-bold">Sign in to your account</h1>
        <div className="flex flex-col gap-4 py-4">
          <label className="text-[11px] text-slate-600 -mb-2">Your email</label>
          <input
            className="block p-1 outline-none border"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="text-[11px] text-slate-600 -mb-2">Password</label>
          <input
            className="block p-1 outline-none border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={`/profile`}>
            <button
              className="rounded-md mt-10 text-white font-medium border-[1px] p-2 w-64 self-center bg-blue-700"
              onClick={handleSubmit}
            >
              CONTINUE
            </button>
          </Link>
        </div>
        <p className="text-blue-700 text-center text-xs font-medium">
          Forget your password?
        </p>
      </div>
      <p className="p-4 text-sm">
        Don’t have an account?
        <span className="text-blue-700 font-thin">Sign up</span>
      </p>
    </div>
  );
};
export default Login;
