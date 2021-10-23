import { Switch, Route } from "react-router-dom";
import Github from "./pages/github/Github";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/github" component={Github} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
