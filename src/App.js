import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutUs from "./scenes/AboutUs";
import HomeScreen from "./scenes/HomeScreen";
import Services from "./scenes/Services";
import Footer from "./scenes/Footer";
import ContactUs from "./scenes/ContactUs";
import Testimonials from "./scenes/Testimonials";
import ValuableClients from "./scenes/ValuableClients";
import Gallery from "./scenes/Gallery";
function App() {
  return (
    <div className="app">
      <CssBaseline></CssBaseline>
      <Navbar></Navbar>
      <HomeScreen></HomeScreen>
      <AboutUs></AboutUs>
      <Services></Services>
      <Testimonials></Testimonials>
      <Gallery></Gallery>
      <ValuableClients></ValuableClients>

      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
