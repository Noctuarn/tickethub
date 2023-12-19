import { VscArrowSwap } from "react-icons/vsc";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Journey = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const navigate = useNavigate();

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const distract = [
    "Verkhovyna",
    "Bukovel",
    "Dolina",
    "Tysmenytsia",
    "Sniatyn",
    "Nadvirna",
    "Kalush",
    "Bohorodchany",
    "Ivano-Frankivsk",
    "Kolomyia",
    "Halych",
    "Horodenka",
  ];

  const [selectedFromCity, setSelectedFromCity] = useState(distract[0]);
  const [selectedToCity, setSelectedToCity] = useState(distract[1]);

  const changeDestination = () => {
    let temp = selectedToCity;
    setSelectedToCity(selectedFromCity);
    setSelectedFromCity(temp);
  };

  const ticketFindHandler = () => {
    navigate(
      `/tickets/${selectedDate}/${selectedFromCity}/${selectedToCity}`
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex bg-white text-main-blue w-1/2 px-20 py-10 items-center gap-8">
        <div className="flex flex-col items-center gap-5">
          <FaRegBuilding className="text-4xl text-gray-400" />

          <select
            id="fromCity"
            className="text-2xl font-bold bg-transparent border-none outline-none focus:outline-none"
            value={selectedFromCity}
            onChange={(e) => setSelectedFromCity(e.target.value)}
          >
            {distract.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <h3 className="text-2xl text-gray-700">From</h3>
        </div>

        <button onClick={changeDestination}>
          <VscArrowSwap className="text-3xl text-gray-400 cursor-pointer" />
        </button>

        <div className="flex flex-col items-center gap-5">
          <FaRegBuilding className="text-4xl text-gray-400" />

          <select
            id="toCity"
            className="text-2xl font-bold bg-transparent border-none outline-none focus:outline-none"
            value={selectedToCity}
            onChange={(e) => setSelectedToCity(e.target.value)}
          >
            {distract.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <h3 className="text-2xl text-gray-700">Destination</h3>
        </div>
      </div>

      <div className="flex w-3/4 items-center text-main-crimson">
        <div className="flex flex-col items-center gap-5 px-20 py-10 text-white">
          <h3 className="text-xl">Have offers code ?</h3>
          <button className="bg-main-blue px-6 py-2 text-lg uppercase font-bold">
            View offers
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 bg-white px-20 py-14">
          <FaRegCalendarAlt className="text-4xl text-gray-400" />
          <input
            onChange={handleDateChange}
            className="text-2xl font-bold"
            type="date"
            value={selectedDate}
          />
          <h3 className="text-2xl text-gray-700">Select date</h3>
        </div>
        <button
          onClick={ticketFindHandler}
          className="text-white text-3xl bg-main-crimson h-64 px-5 hover:px-7 transition-all"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Journey;
