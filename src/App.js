import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
