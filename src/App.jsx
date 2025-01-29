import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsProjects from './components/details/DetailsProjects';
import Portfolio from "./components/portfolio/Portfolio";
import HomePage from "./components/home/HomePage";
import { ThemeProvider } from "./components/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Portfolio/:id" element={<DetailsProjects />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
