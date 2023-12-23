import { useState } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import users from "../../../data/users.json";
import usersData from "../../../data/usersData.json";

import { useActions } from "../../hooks/useActions";
import { userActions } from "../../redux/reducers/user.slice";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser } = useActions(userActions);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email.length === 0 && password.length === 0) {
      setErrorMessage("Please enter value in fields");
      return
    }

    const user = users.users.find(
      (u) => u.email === email && u.password === password
    );

    const userData = usersData.usersData.find((u) => u.id === user?.id);

    if (userData) {
      setUser({
        id: userData.id,
        name: userData.name,
        surname: userData.surname,
        money: userData.money,
        tickets: userData.tickets,
        email: user?.email,
        tel: userData.tel,
      });
      navigate("/");
    } else {
      setErrorMessage("User not founded");
    }
  };

  return (
    <div id="login" className="flex flex-col gap-5">
      <form action="" className="w-full flex flex-col gap-3 sm:gap-4">
        <div className="join bg-primary shadow-2xl p-2 flex items-center border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <MdEmail />
          </label>
          <input
            type="email"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="join bg-primary shadow-2xl p-2 flex items-center border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <MdPassword />
          </label>
          <input
            type="password"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-row gap-3 items-center justify-between">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-error" />
              <span className="sm:text-sm text-pastelBlue pl-2">
                Remember me
              </span>
            </label>
          </div>
          <div>
            <a
              className="sm:text-sm hover:text-main-crimson cursor-pointer"
              href="#"
            >
              Forget Password
            </a>
          </div>
        </div>
        <button
          className="w-full bg-main-crimson py-3 mt-5 flex justify-center items-center gap-2"
          onClick={handleLogin}
        >
          Login <FaTelegramPlane />
        </button>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
