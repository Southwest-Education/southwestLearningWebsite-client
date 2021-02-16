import { BrowserRouter as Router, Route } from 'react-router-dom';
// HOME
import Home from './components/Pages/Home/Home';
// PRODUCTS
import ReadingPlus from './components/Pages/Products/ReadingPlus/ReadingPlus';
import RedboxVR from './components/Pages/Products/RedboxVR/RedboxVR';
import Roadway2Learning from './components/Pages/Products/Roadway2Learning/Roadway2Learning';
import SymphonyMath from './components/Pages/Products/SymphonyMath/SymphonyMath';
import Testimonials from './components/Pages/Products/Testimonials/Testimonials';
// COMPANY
import AboutUs from './components/Pages/Company/AboutUs/AboutUs';
import Team from './components/Pages/Company/Team/Team';
import WhereWeReach from './components/Pages/Company/WhereWeReach/WhereWeReach';
//CONTACT
import Contact from './components/Pages/Contact/Contact';
import KevinContact from './components/Pages/Contact/KevinContact';
import BeccaContact from './components/Pages/Contact/BeccaContact';
import DebbieContact from './components/Pages/Contact/DebbieContact';
// HEADER/TITLE
import Header from './components/Header/Header';
import MainTitle from './components/MainTitle/MainTitle';
// MAPBOX MARKER
import MapBoxMarker from './components/MapBoxMarker/MapBoxMarker';
// SENT MESSAGE
import SentMessage from './components/SentMessage/SentMesage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainTitle />
        <div className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route exact path="/ReadingPlus" component={ReadingPlus} />
          <Route exact path="/SymphonyMath" component={SymphonyMath} />
          <Route exact path="/RedboxVR" component={RedboxVR} />
          <Route exact path="/Roadway2Learning" component={Roadway2Learning} />
          <Route exact path="/Testimonials" component={Testimonials} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/MapBoxMarker" component={MapBoxMarker} />
          <Route exact path="/SentMessage" component={SentMessage} />

          <Route
            exact
            path="/kevin@southwestlearning.com"
            component={KevinContact}
          />
          <Route
            exact
            path="/becca@southwestlearning.com"
            component={BeccaContact}
          />
          <Route
            exact
            path="/debbie@southwestlearning.com"
            component={DebbieContact}
          />
          <Route exact path="/WhereWeReach" component={WhereWeReach} />
          <Route exact path="/Contact" component={Contact} />
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
