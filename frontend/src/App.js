import Header from "./components/Header";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
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
