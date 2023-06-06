import styles from "./style";
import Billing from "./components";
import Business from "./components";
import CardDeal from "./components";
import Clients from "./components";
import CTA from "./components";
import Footer from "./components";
import Navbar from "./components";
import Stats from "./components";
import Testimonials from "./components";
import Hero from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {

return(
<>

<Routes>
    <Route path="/123" element={<Hero/>}/>
</Routes>

  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>

  </>
  )
}

export default App;