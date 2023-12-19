import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    { id: 1, name: "Bus tickets" },
    { id: 2, name: "Bus hire" },
    { id: 3, name: "Life tracking" },
    { id: 4, name: "Offers" },
    { id: 5, name: "Contact us" },
  ];

  const navigate = useNavigate();
  const {name} = useAppSelector(state => state.user)

  return (
    <div className="flex justify-between items-center absolute left-0 top-4 w-[95%] z-30 p-[15px] mx-9">
      <div className="flex gap-20 items-center">
        <h3 onClick={() => {navigate("/")}} className="text-main-blue text-2xl font-bold cursor-pointer">
          TicketHub
        </h3>
        <nav className="flex gap-4">
            {navLinks.map(el => (<li key={el.id} className="text-gray-400 cursor-pointer uppercase font-bold hover:underline hover:text-white transition-all">{el.name}</li>))}
        </nav>
      </div>
      {name.length > 0 ? <button onClick={() => {navigate("/account")}} className="rounded-full bg-orange-500 text-2xl w-[50px] h-[50px] grid place-items-center">{name[0].toUpperCase()}</button> : <button className="bg-main-crimson text-lg uppercase font-semibold px-4 py-1 rounded-lg hover:border-main-crimson border-2 border-transparent hover:bg-transparent hover:text-main-crimson transition-all">
        <Link to={"/signup"}>Try Tickethub</Link>
      </button>}
    </div>
  );
};

export default NavBar;
