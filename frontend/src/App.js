import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
