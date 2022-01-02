
import SellerProfile from "./components/SellerProfile";
import Navbar from "./components/ui/Navbar";
import PackageGroup from "./components/PackageGroup";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <PackageGroup />
      <SellerProfile />
    </div>
  );
}

export default App;
