import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Tickets from "./pages/Tickets";
import TicketDetail from "./pages/TicketDetail";

const App = () => {
  return (
    <div className="w-100% relative">
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Login/>} path="/signup"/>
        <Route element={<Tickets/>} path="/tickets/:date/:from/:to/:amount"/>
        <Route element={<TicketDetail/>} path="/tickets/:amount/:id"/>
        <Route element={<Account/>} path="/account"/>
      </Routes>
    </div>
  );
};

export default App;
