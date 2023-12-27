import { useState } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import { FaTelegramPlane, FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Users from "../../../data/users.json";
import { useNavigate } from "react-router-dom";

import { userActions } from "../../redux/reducers/user.slice";
import { useActions } from "../../hooks/useActions";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { setUser } = useActions(userActions);

  const isFormValid = () => {
    return (
      firstName.trim() !== "" &&
      surname.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password.trim() === confirmPassword.trim()
    );
  };

  const handleSignUp = () => {
    if (isFormValid()) {
      setUser({
        id: Users.users.length + 1,
        name: firstName,
        surname: surname,
        money: 0,
        tickets: [],
        email: email,
        tel: phone,
      });

      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div id="signup" className="tab-content flex flex-col gap-5">
      <form action="" className="w-full flex flex-col gap-3 sm:gap-4">
        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <FaUser />
          </label>
          <input
            type="text"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <FaUser />
          </label>
          <input
            type="text"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Last Name"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <MdEmail />
          </label>
          <input
            type="email"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <BsTelephoneFill />
          </label>
          <input
            type="tel"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
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

        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <PiPasswordBold />
          </label>
          <input
            type="password"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Type password again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-3 items-center justify-between">
          <div>
            <p className="sm:text-sm">
              By creating an account, you agree and accept our{" "}
              <span className="underline hover:text-main-crimson">Terms</span>{" "}
              and{" "}
              <span className="underline hover:text-main-crimson">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>

        <button
          className="w-full bg-main-crimson py-3 mt-5 flex justify-center items-center gap-2"
          onClick={handleSignUp}
          disabled={!isFormValid()}
        >
          Sign up <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
