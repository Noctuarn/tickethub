import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppSelector";
import { userActions } from "../redux/reducers/user.slice";
import { useActions } from "../hooks/useActions";

import UserTicket from "../components/UserTicket/UserTicket";

const Account = () => {
  const { name, money, tickets } = useAppSelector((state) => state.user);
  const { setNewUser } = useActions(userActions);
  const navigate = useNavigate();

  const exitAccountHandler = () => {
    setNewUser();
    navigate("/");
  };

  return (
    <>
      <NavBar />

      <div className="w-full min-h-screen bg-main-blue-dark flex flex-col items-center pb-20">
        <h1 className="text-5xl font-bold mb-6 mt-40">{name}</h1>
        <h2 className="text-xl text-gray-300 font-bold mb-20">
          Current balance: <span className="text-main-crimson">{money}₴</span>
        </h2>

        <div className="mb-10">
          {tickets.length === 0 ? (
            <h3>You don't have any tickets</h3>
          ) : (
            <div className="flex flex-col gap-10">
              {tickets.map((t) => (
                <UserTicket
                  key={t.id}
                  amount={t.amount}
                  arrivalTime={t.arrivalTime}
                  carrier={t.carrier}
                  date={t.date}
                  departure={t.departure}
                  deperatureTime={t.deperatureTime}
                  destination={t.destination}
                  id={t.id}
                  price={t.price}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-6 mt-10">
          <button
            className="bg-main-blue rounded-md px-6 py-2 text-xl font-bold"
            onClick={() => {
              navigate("/");
            }}
          >
            Order ticket
          </button>
          <button
            className="bg-main-crimson rounded-md px-6 py-2 text-xl font-bold"
            onClick={exitAccountHandler}
          >
            Exit from account
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
