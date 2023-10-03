import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstScreen from "../components/screens/first-screen/FirstScreen";
import Dashboard from "../components/screens/dashboard/Dashboard";
import NotFound from "../components/screens/not-found/NotFound";

const Router = () => {
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
