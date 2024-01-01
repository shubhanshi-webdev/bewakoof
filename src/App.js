import "./App.css";
import Category from "./Components/Category";
import CategoryToBag from "./Components/CategoryToBag";
import DesignOfWeek from "./Components/DesignOfWeek";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeSlider from "./Components/HomeSlider";
import HotToBeMissed from "./Components/HotToBeMissed";
import LastMinute from "./Components/LastMinute";
import Bestofbewkoof from "./Components/MobileSections/Bestofbewkoof";
import ExclusiveGoofcorner from "./Components/MobileSections/ExclusiveGoofcorner";
import FixedFooter from "./Components/MobileSections/FixedFooter";
import FlashSale from "./Components/MobileSections/FlashSale";
import MobileFooter from "./Components/MobileSections/MobileFooter";
import OfficialCollaboration from "./Components/MobileSections/OfficialCollaboration";
import Offer from "./Components/Offer";
import TrendingCategory from "./Components/TrendingCategory";

function App() {
  return (
    <>
      <Offer />
      <Header />
      <Category />
      <HomeSlider />
      <LastMinute />
      <DesignOfWeek />
      <TrendingCategory />
      <FlashSale />
      <HotToBeMissed />
      <CategoryToBag />
      <Bestofbewkoof />
      <OfficialCollaboration />
      <ExclusiveGoofcorner />
      <MobileFooter />
      <FixedFooter />
      <Footer />
    </>
  );
}

export default App;
