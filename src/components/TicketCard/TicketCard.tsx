import { Ticket } from "../../types/interfaces";
import { useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const TicketCard = ({ departure, destination, price, time, date }: Ticket) => {

    const [amount, setAmount] = useState(0);
    const {name} = useAppSelector(state => state.user)


    const buyTicketHadler = () => {
        if(name.length === 0) {
            alert("Увійдіть у свій обліковий запис або створіть акаунт, щоб замовити квиток")
            return;
        } else {
            alert("Ура ви купили квиток")
        }
    }
  
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="rounded-lg bg-white flex flex-col p-5 text-black">
        <h2 className="text-2xl font-bold mb-5">
          {" ["} {departure} - {destination} {" ]"}
        </h2>
        <h4>
          Leaving <span className="text-main-crimson font-bold">{date}</span> at{" "}
          {time}
        </h4>
        <h5 className="self-end text-xl">
          Price: <span className="text-main-crimson font-bold">{price}$</span>
        </h5>
      </div>

        <div className="flex items-center text-4xl">
            <button onClick={() => {
                if(amount == 0) {
                    return
                } else {
                    setAmount(prev => prev - 1)
                }
            }} className="w-[50px] h-[50px] bg-main-crimson">-</button>
            <h3 className="px-2">{amount}</h3>
            <button onClick={() => setAmount(prev => prev + 1)} className="w-[50px] h-[50px] bg-main-blue">+</button>
        </div>

        <button onClick={buyTicketHadler} className="border-2 border-main-crimson px-6 py-4 text-2xl text-main-crimson mt-8">Buy ticket</button>

    </div>
  );
};

export default TicketCard;
