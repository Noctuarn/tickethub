import { TicketProps } from "../../types/interfaces";
import { useAppSelector } from "../../hooks/useAppSelector";

import { useActions } from "../../hooks/useActions";
import { userActions } from "../../redux/reducers/user.slice";

const UserTicket = ({
  amount,
  id,
  arrivalTime,
  carrier,
  departure,
  deperatureTime,
  destination,
  price,
}: TicketProps) => {
  const { name, surname } = useAppSelector((state) => state.user);
  const { returnTicket } = useActions(userActions);

  const returnTicketHandler = () => {
    const result = window.confirm("You sure you want to return your ticket ?");

    if (result) {
      alert("Your ticket has been returned succesfully");
      returnTicket({ ticketId: id, price: price * Number(amount) });
    }
  };

  return (
    <div className="flex gap-4 h-[213px]">
      <div className="bg-white rounded text-main-blue-dark flex w-[600px] h-full">
        <div className="w-[80%]">
          <div className="flex border-b-2 border-black py-6 px-6 justify-between">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">{deperatureTime}</h3>
              <span>{departure}</span>
            </div>

            <div className="flex flex-col">
              <h3 className="text-3xl font-bold">{arrivalTime}</h3>
              <span>{destination}</span>
            </div>
          </div>

          <div className="bg-main-crimson bg-opacity-50 pt-4">
            <div className="flex justify-between px-6">
              <h3 className="text-xl ">Ticket's owner</h3>
              <span className="text-xl font-semibold">
                {name} {surname}
              </span>
            </div>

            <div className="flex justify-between px-6 pb-4 mt-4">
              <h3 className="text-xl">Carrier</h3>
              <span className="text-xl font-semibold">{carrier}</span>
            </div>
          </div>
        </div>

        <div className="w-[20%] border-l-2 border-black border-dashed flex flex-col justify-center items-center">
          <span className="text-main-blue-dark text-3xl font-bold">
            x{amount}
          </span>
        </div>
      </div>

      <button
        onClick={returnTicketHandler}
        className="w-[100px] font-semibold py-4 bg-main-crimson"
      >
        Return the ticket
      </button>
    </div>
  );
};

export default UserTicket;
