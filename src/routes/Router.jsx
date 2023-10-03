import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FirstScreen from "../components/screens/first-screen/FirstScreen";
import Dashboard from "../components/screens/dashboard/Dashboard";
import NotFound from "../components/screens/not-found/NotFound";
import Cookies from "js-cookie";

const Router = () => {
  let dontShow = Cookies.get("dontshow");

  const checkCookies = () => {
    setInterval(() => {
      const newDontShow = Cookies.get("dontshow");
      if (dontShow === newDontShow) return;

      return (dontShow = newDontShow);
    }, 1000);
  };
  checkCookies();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
