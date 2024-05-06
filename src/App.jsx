import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import MemberPage from "./ui/MemberPage.jsx";
import TeamPage from "./ui/TeamPage.jsx";
import ChannelPage from "./ui/ChannelPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/members" element={<MemberPage />} />
        <Route exact path="/teams" element={<TeamPage />} />
        <Route exact path="/channels" element={<ChannelPage />} />
      </Routes>
    </Router>
  );
}

export default App;