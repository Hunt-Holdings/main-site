import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Menu from "./pages/legal/Menu.tsx";
import TermsAndConditions from "./pages/legal/TermsAndConditions.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Menu />} />
      <Route
        path="/legal/termsandconditions"
        element={<TermsAndConditions />}
      />
    </Routes>
  );
}
