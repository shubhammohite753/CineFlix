import "./App.css";
import Cineflicks from "./Components/Cineflicks/Cineflicks";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Cineflicks />
      <Footer />
    </div>
  );
}

export default App;
