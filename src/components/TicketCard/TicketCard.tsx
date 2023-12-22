import { Ticket } from "../../types/interfaces";
// import { useAppSelector } from "../../hooks/useAppSelector";
// import { useActions } from "../../hooks/useActions";
// import { userActions } from "../../redux/reducers/user.slice";

const TicketCard = ({ id, price, deperatureTime, arrivalTime, date, departure, carrier, destination }: Ticket) => {

  return (
    <div className="flex flex-col">
      <span className="self-start text-white bg-main-crimson p-2">
        Without print
      </span>
      <div className="rounded-lg bg-white flex text-black w-[1000px] border-2 border-main-crimson">
        <div className="flex flex-col w-[80%] border-r-2 pt-8 border-black border-dashed">
          <div className="flex justify-between px-8">
            <div className="flex flex-col gap-2">
              <span className="text-4xl">{deperatureTime}</span>
              <span className="text-xl">{departure}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl">{arrivalTime}</span>
              <span className="text-xl">{destination}</span>
            </div>
          </div>

          <div className="flex bg-main-crimson bg-opacity-40 w-full px-8 mt-10 py-2 text-xl text-main-blue-dark">
            <h4>Carrier:  <span className="font-bold">{carrier}</span></h4>
          </div>
        </div>

        <div className="w-[20%] flex flex-col items-center justify-center p-2">
          <span className="text-main-blue-dark text-2xl font-bold mb-4">{price}₴</span>
          <button className="bg-main-crimson text-white rounded-sm px-6 py-3 font-bold text-xl">Choose</button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
