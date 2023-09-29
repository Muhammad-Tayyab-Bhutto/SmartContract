import "./App.css";
import { Navbar, Transactions, Welcome, Services, Footer } from "./components";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Transactions />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
