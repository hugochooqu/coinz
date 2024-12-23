import { Navbar, Footer, Welcome, Loader, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-300">
      <div className=''>
        <Navbar />
        <Welcome/>
      </div>
      <Services />
      <Transactions />
      <Footer/>
    </div>
  );
};

export default App;
