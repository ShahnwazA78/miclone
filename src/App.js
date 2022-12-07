import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import Offers from "./components/Offers";
import data from "./data/data.json";
import Section from "./components/Section";
import StarProducts from "./components/StarProducts";
import HotAccesoriesMenu from "./components/HotAccesoriesMenu.jsx";
import HotAccesories from "./components/HotAccesories.jsx";
import ProductReview from "./components/ProductReview.jsx";
import Videos from "./components/Videos.jsx"
import Banner from "./components/Banner.jsx"
import Footer from "./components/Footer.jsx"
import NavOptions from "./components/NavOptions.jsx"
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
      miPhones={data.miPhones}
      redmiPhones={data.redmiPhones}
      tv={data.tv}
      laptop={data.laptop}
      fitnessAndLifeStyle={data.fitnessAndLifeStyle}
      home={data.home}
      audio={data.audio}
      accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Section title="Star Products" />
      <StarProducts starProduct={data.starProduct} />
      <Section title="Hot Accessories" />
      <HotAccesoriesMenu />
      <Route path="/music" exact>
        <HotAccesories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>
      <Route path="/smartDevice" exact>
        <HotAccesories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route path="/home" exact>
        <HotAccesories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>
      <Route path="/lifeStyle" exact>
        <HotAccesories
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route path="/mobileAccessories" exact>
        <HotAccesories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
      <Section title="Product Reviews" />
      <ProductReview products={data.productReviews} />
      <Section title="Videos"/>
      <Videos videos={data.videos}/>
      <Section title="In the press"/>
      <Banner Banner={data.banner.end}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
