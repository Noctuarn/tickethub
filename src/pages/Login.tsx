import { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm/LoginForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const Login = () => {
  const [activeTab, setActiveTab] = useState("#login");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="container py-20 bg-main-blue-dark h-screen relative overflow-hidden transition-all">
      <div className="w-[70%] m-auto rounded-xl shadow-3xl ">
        <div className="flex flex-col items-center justify-between gap-8 p-5 md:p-10 lg:p-14">
          <div>
            <img
              className="w-32 md:w-40 h-auto"
              src="assets/images/logo.png"
              alt=""
            />
          </div>
          <div className="tabs w-full">
            <ul
              id="nav-tab"
              className="flex items-center justify-center mb-5 md:mb-8"
            >
              <li
                className={`px-7 py-2 rounded-md ${
                  activeTab === "#login" ? "bg-main-crimson text-white" : ""
                }`}
                onClick={() => handleTabClick("#login")}
              >
                <button>Login</button>
              </li>
              <li
                className={`px-7 py-2 rounded-md ${
                  activeTab === "#signup" ? "bg-main-crimson text-white" : ""
                }`}
                onClick={() => handleTabClick("#signup")}
              >
                <button>Sign Up</button>
              </li>
            </ul>

            <div id="tabs-content">
              {activeTab === "#login" ? <LoginForm /> : <SignUpForm />}
            </div>
          </div>

          <div>
            <p className="text-center">2023 TicketHub ©</p>
          </div>
        </div>
      </div>

      <motion.div
        className="rounded-full bg-main-crimson w-[200px] h-[200px] absolute -top-10 -right-10 blur-lg"
        animate={{ scale: 1.5 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="rounded-full bg-main-blue w-[200px] h-[200px] absolute -bottom-10 -left-10 blur-lg"
        animate={{ scale: 1.5 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Login;