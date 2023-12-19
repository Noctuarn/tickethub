import BgImage from "../assets/images/banner-bg.jpg";
import Journey from "../components/Journey/Journey";

import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <NavBar/>

      <div className="relative">
        <img
          className="absolute top-0 left-0 w-full object-cover z-10 brightness-[65%]"
          src={BgImage}
        />

        <div className="w-[95%] mx-9 p-[15px] z-20 relative">
          <div className="mt-60 flex flex-col gap-5">
            <h1 className="text-5xl font-bold uppercase select-none">
              Stop Looking. <br />{" "}
              <span className="text-main-crimson">Start tracking !</span>
            </h1>
            <p className="w-[30%]">
              The most biggest web-site of bus ticket sale in Ivano-Frankivsk
            </p>
            <Journey />
          </div>
        </div>

        <div className="flex absolute -bottom-3 z-30 right-0">
          <div className="p-5 w-24 h-24 bg-main-blue-dark hover:-translate-y-3 transition-all cursor-pointer grid place-items-center text-2xl">
            <FaFacebookF />
          </div>
          <div className="p-5 w-24 h-24 bg-main-blue-dark hover:-translate-y-3 transition-all cursor-pointer grid place-items-center text-2xl">
            <FaTwitter />
          </div>
          <div className="p-5 w-24 h-24 bg-main-blue-dark hover:-translate-y-3 transition-all cursor-pointer grid place-items-center text-2xl">
            <FaLinkedinIn />
          </div>
          <div className="p-5 w-24 h-24 bg-main-blue-dark hover:-translate-y-3 transition-all cursor-pointer grid place-items-center text-2xl">
            <FaGithub />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
