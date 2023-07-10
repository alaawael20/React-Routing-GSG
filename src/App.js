import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home";
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import About from "./pages/About";
import Profile from "./pages/Profile";
import CounterApp from "./pages/Counter";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/counter" element={<CounterApp />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
