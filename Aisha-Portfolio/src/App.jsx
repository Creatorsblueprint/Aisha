
import { useState, useRef, useEffect } from 'react';
import Home from './Home/Home';
import Recognition from './Recognition/Recognition';
import Product from './Product/Product';
import Gallery from './Gallery/Gallery';
import PaymentSuccess from './paymentPopups/PaymentSuccess';
import PaymentCancel from './paymentPopups/PaymentCancel';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


function App() {

  const [activeNav, setActiveNav] = useState('Home');
  const containerRef = useRef(null);
  const [paymentActive, setPaymentActive] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);









  return (
    <div className="app" ref={containerRef} >
      <div className={'header'} >
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} containerRef={containerRef} />

      </div>

      <div className="main">

        <div className={activeNav === 'Home' ? 'home active' : 'home'}>
          <Home />

        </div>
        <div className={activeNav === 'Recognition' ? 'recognition active' : 'recognition'}>
          <Recognition />

        </div>
        <div className={activeNav === 'Product' ? 'product active' : 'product'}>
          <Product setPaymentActive={setPaymentActive} />

        </div>
        <div className={activeNav === 'Gallery' ? 'gallery active' : 'gallery'}>
          <Gallery />

        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
      <div className={paymentActive === 'PaymentSuccess' ? 'activeSection' : 'notActiveSection'}>
        <PaymentSuccess setPaymentActive={setPaymentActive} />
      </div>

      <div className={paymentActive === 'PaymentCancel' ? 'activeSection' : 'notActiveSection'}>
        <PaymentCancel setPaymentActive={setPaymentActive} />
      </div>




    </div>
  );
}

export default App;
