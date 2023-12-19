import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppSelector";

const Account = () => {

const {name, money, tickets} = useAppSelector(state => state.user);
const navigate = useNavigate()  

return (
    <>
      <NavBar />

        <div className="w-full min-h-screen bg-main-blue-dark flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-6">{name}</h1>
          <h2 className="text-xl text-gray-300 font-bold mb-20">Current balance: <span className="text-main-crimson">{money}$</span></h2>

          <div className="mb-10">
            {tickets.length === 0 ? <h3>You don't have any tickets</h3> : null}
          </div>

            <div className="flex gap-6">

                <button className="bg-main-blue rounded-md px-6 py-2 text-xl font-bold" onClick={() => {navigate("/")}}>Order ticket</button>
                <button className="bg-main-crimson rounded-md px-6 py-2 text-xl font-bold">Exit from account</button>
            </div>
        </div>

    </>
  );
};

export default Account;
