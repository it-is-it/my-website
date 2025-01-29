import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsProjects from "./Components/details/DetailsProjects";
import Projects from "./Components/portfolio/Portfolio";
import HomePage from "./components/home/HomePage";
import { ThemeProvider } from "./Components/ThemeProvider";
function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/:id" element={<DetailsProjects />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
