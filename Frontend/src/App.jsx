import Body from "./component/Body";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
