import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Ticket } from "../types/interfaces";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import { useAppSelector } from "../hooks/useAppSelector";

const TicketDetail = () => {
  const { id, amount } = useParams();
  const [ticketDetail, setTicketDetail] = useState<Ticket>();
  const { name, email } = useAppSelector((state) => state.user);

  const [userName, setUserName] = useState(name);
  const [userSurName, setUserSurName] = useState("");
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch(`http://localhost:3000/tickets/${id}`);
      const data = await responce.json();

      setTicketDetail(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-main-blue-dark flex flex-col justify-center items-center relative py-40">
        {ticketDetail && (
          <div className="flex gap-5 w-[80%]">
            <div className="w-[70%] text-black flex flex-col gap-5">
              <div className="p-8 rounded-lg w-full bg-white">
                <h1 className="text-2xl font-semibold uppercase">
                  Issuance of a ticket
                </h1>
                <div className="flex justify-between mt-8">
                  <div className="flex flex-col gap-2 w-[49%]">
                    <label>First Name:</label>
                    <input
                      className="border-gray-600 p-2 text-lg border-2 rounded-md text-black "
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-[49%]">
                    <label>Last Name:</label>
                    <input
                      className="border-gray-600 p-2 text-lg border-2 rounded-md text-black "
                      onChange={(e) => setUserSurName(e.target.value)}
                      value={userSurName}
                      type="text"
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-8 gap-2">
                  <label>Place in bus</label>
                  <input
                    className="border-gray-600 p-2 text-lg border-2 rounded-md text-black w-[49%]"
                    value={"Free seating"}
                    type="text"
                    readOnly
                  />
                </div>
              </div>

              <div className="p-8 rounded-lg w-full bg-white">
                <h1 className="text-2xl font-semibold uppercase">
                  About costumer
                </h1>

                <p className="mt-4">
                  Enter the correct e-mail and phone number, because they are
                  necessary for user identification, ticket receipt, the
                  possibility of authorization in the personal account and the
                  possibility of returning the ticket
                </p>

                <div className="flex justify-between mt-8">
                  <div className="flex flex-col gap-2 w-[49%]">
                    <label>Email:</label>
                    <input
                      className="border-gray-600 p-2 text-lg border-2 rounded-md"
                      type="email"
                      onChange={(e) => setUserEmail(e.target.value)}
                      value={userEmail}
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-[49%]">
                    <label>Phone number:</label>
                    <input
                      className="border-gray-600 p-2 text-lg border-2 rounded-md"
                      type="tel"
                      onChange={(e) => setUserPhone(e.target.value)}
                      value={userPhone}
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-lg w-full bg-white">
                <div className="flex justify-between pb-4 border-b-2 border-b-gray-500">
                  <h1 className="text-2xl font-semibold uppercase">
                    To be paid
                  </h1>
                  <span className="text-2xl font-bold text-main-blue-dark">
                    {ticketDetail.price * Number(amount)} грн
                  </span>
                </div>
                <p className="mt-10">
                  Your payment and personal data are securely protected in
                  accordance with international security standards.
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <input
                    className="w-[25px] h-[25px]"
                    type="checkbox"
                    id="privacy"
                  />
                  <label className="font-semibold" htmlFor="privacy">
                    I accept the privacy policy
                  </label>
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <input
                    className="w-[25px] h-[25px]"
                    type="checkbox"
                    id="personalData"
                  />
                  <label className="font-semibold" htmlFor="personalData">
                    Consent to the processing of personal data
                  </label>
                </div>
              </div>

                <button disabled={!isFormValid} className={`${isFormValid ? "" : "opacity-50"} w-full py-4 bg-main-crimson text-white text-lg`}>Buy ticket</button>

            </div>

            <div className="w-[30%] px-4 py-10 rounded-lg bg-white text-black max-h-[470px] sticky top-5">
              <h1 className="text-2xl uppercase font-semibold pb-4 border-b-2 border-b-gray-500 mb-10">
                About the bus trip
              </h1>

              <div className="flex justify-between">
                <span className="text-xl font-semibold">
                  {ticketDetail.deperatureTime}
                </span>
                <span>{ticketDetail.departure}</span>
              </div>

              <div className="flex justify-between mt-10">
                <span className="text-xl font-semibold">
                  {ticketDetail.arrivalTime}
                </span>
                <span>{ticketDetail.destination}</span>
              </div>

              <div className="flex justify-between mt-10">
                <span className="text-base">Carrier:</span>
                <span className="text-base font-bold">
                  {ticketDetail.carrier}
                </span>
              </div>

              <div className="flex justify-between mt-2 border-b-2 border-gray-500 pb-4">
                <span className="text-base">Price of ticket</span>
                <span className="text-base font-bold">
                  {ticketDetail.price} грн
                </span>
              </div>

              <h2 className="mt-10 text-2xl text-main-blue-dark font-bold">
                To be paid -{" "}
                <span className="text-main-crimson">
                  {ticketDetail.price * Number(amount)} грн
                </span>
              </h2>
              <h3 className="mt-3 text-lg">{amount} people</h3>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default TicketDetail;
