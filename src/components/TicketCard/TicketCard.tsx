import { TicketProps } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";



const TicketCard = ({
  id,
  price,
  deperatureTime,
  arrivalTime,
  date,
  departure,
  carrier,
  destination,
  amount,
}: TicketProps) => {
  const navigate = useNavigate();

  const orderTicketHandler = () => {
    navigate(`/tickets/${amount}/${id}`);
  };

  return (
    <div className="flex flex-col">
      <span className="self-start text-white bg-main-crimson p-2">
        Without print
      </span>
      <div className="rounded-lg bg-white flex text-black w-[1000px] border-2 border-main-crimson">
        <div className="flex flex-col w-[80%] border-r-2 pt-8 border-black border-dashed">
          <div className="flex justify-between px-8 items-center">
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold">{deperatureTime}</span>
              <span className="text-xl">{departure}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-4xl font-bold">{arrivalTime}</span>
              <span className="text-xl">{destination}</span>
            </div>
          </div>

          <div className="flex flex-col bg-main-crimson bg-opacity-40 w-full px-8 mt-10 py-2 text-xl text-main-blue-dark">
            <h3 className="text-xl font-semibold mb-4">{date}</h3>
            <h4>
              Carrier: <span className="font-bold">{carrier}</span>
            </h4>
          </div>
        </div>

        <div className="w-[20%] flex flex-col items-center justify-center p-2">
          <span className="text-main-blue-dark text-2xl font-bold mb-4">
            {price}₴
          </span>
          <button onClick={orderTicketHandler} className="bg-main-crimson text-white rounded-sm px-6 py-3 font-bold text-xl">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
