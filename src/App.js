import Home from "./pages/Home/Home";
import Header from "./components/header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
