import { Route, Switch } from "wouter";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import Kitchens from "./pages/Kitchens";
import Bedrooms from "./pages/Bedrooms";
import Wardrobes from "./pages/Wardrobes";
import Bathrooms from "./pages/Bathrooms";
import Vanities from "./pages/Vanities";
import TVUnits from "./pages/TVUnits";
import Laundry from "./pages/Laundry";
import ProductDetail from "./pages/ProductDetail";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileActionBar from "./components/MobileActionBar";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/kitchens" component={Kitchens} />
          <Route path="/bedrooms" component={Bedrooms} />
          <Route path="/wardrobes" component={Wardrobes} />
          <Route path="/bathrooms" component={Bathrooms} />
          <Route path="/vanities" component={Vanities} />
          <Route path="/tv-units" component={TVUnits} />
          <Route path="/laundry" component={Laundry} />
          <Route path="/:category/:slug" component={ProductDetail} />
          <Route path="/process" component={Process} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <Footer />
      <MobileActionBar />
    </div>
  );
}
