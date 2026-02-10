import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Menu from "./pages/legal/Menu.tsx";
import TechSupportTerms from "./pages/legal/T&C/TechSupport.tsx";
import ConsultationTerms from "./pages/legal/T&C/Consultation.tsx";
import Layout from "../components/Layout.tsx"; // optional wrapper

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Menu />} />
        <Route path="/legal/TechSupport/Terms" element={<TechSupportTerms />} />
        <Route
          path="/legal/Consultation/Terms"
          element={<ConsultationTerms />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
