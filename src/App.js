import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Services, { servicesLoader } from "./components/Services";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";
import ServicesDetails, {
  serviceDetailsLoader,
} from "./components/ServicesDetails";
import ServiceError from "./components/ServiceError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Landing />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>

        <Route
          path="Services"
          element={<Services />}
          loader={servicesLoader}
          errorElement={<ServiceError />}
        ></Route>

        <Route
          path="services/:id"
          element={<ServicesDetails />}
          loader={serviceDetailsLoader}
          errorElement={<ServiceError />}
        ></Route>

        <Route path="Help" element={<Help />}>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Faq" element={<Faq />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
