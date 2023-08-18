import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
