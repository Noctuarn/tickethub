import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Ticket } from "../types/interfaces";
import TicketCard from "../components/TicketCard/TicketCard";
import { useAppSelector } from "../hooks/useAppSelector";

const Tickets = () => {
  const { date, from, to, amount } = useParams();
  const [tickets, setTickets] = useState<Ticket[]>();

  const { name, money } = useAppSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(
        `http://localhost:3000/tickets?date=${date}&destination=${to}&departure=${from}`
      );
      const data = await responce.json();
      console.log(data);
      setTickets(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-main-blue-dark flex flex-col justify-center items-center relative">
        {tickets && tickets.length > 0 ? (
          <div className="flex justify-between">
            {tickets.map((el) => (
              <TicketCard
                key={el.id}
                id={el.id}
                date={el.date}
                departure={el.departure}
                destination={el.destination}
                price={el.price}
                deperatureTime={el.deperatureTime}
                arrivalTime={el.arrivalTime}
                carrier={el.carrier}
                amount={amount!}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-6xl font-bold">
            No tickets available...
          </p>
        )}
        {name.length > 0 && (
          <div className="absolute bottom-2 right-2 text-xl">
            Your balance is <span className="text-main-crimson">{money}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Tickets;
