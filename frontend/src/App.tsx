import { Routes, Route } from "react-router-dom";
import LoginForm from './components/LoginForm.tsx';
import KlausurenDashboard from "./pages/KlausurenDashboard.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<KlausurenDashboard />} />
    </Routes>
  );
}

export default App;
