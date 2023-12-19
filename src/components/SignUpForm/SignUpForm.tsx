import { MdEmail, MdPassword } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import { FaTelegramPlane, FaUser } from "react-icons/fa";

const SignUpForm = () => {
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
            placeholder="Full Name"
          />
        </div>
        <div className="join bg-primary shadow-2xl p-2 flex items-center  border-2 border-white">
          <label className="px-3 py-1 text-lg join-item text-pastelBlue border-r border-r-slate-400">
            <MdEmail />
          </label>
          <input
            type="number"
            className="px-3 py-2 w-full text-sm join-item outline-none bg-transparent"
            placeholder="Email"
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
          />
        </div>
        <div className="flex flex-row gap-3 items-center justify-between">
          <div>
            <p className="sm:text-sm">
              By creating an account, you agree and accept our{" "}
              <span className="underline hover:text-main-crimson">
                Terms
              </span>{" "}
              and{" "}
              <span className="underline hover:text-main-crimson">
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
        <button className="w-full bg-main-crimson py-3 mt-5 flex justify-center items-center gap-2">
          Sign up <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;