import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
