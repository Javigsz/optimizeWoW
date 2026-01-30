import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <>
      <Header />
      <div className="flex font-overpass text-white">
        <SideMenu />
        <MainContent />
      </div>
    </>
  );
}

export default App;
