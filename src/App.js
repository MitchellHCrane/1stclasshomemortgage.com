import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "./layouts/Main_layout";
import PrivacyPolicy from "./pages/Privacy_policy";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Layout  */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
