import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Recognition from './Recognition/Recognition';
import Product from './Product/Product';
import Gallery from './Gallery/Gallery';
import PaymentSuccess from './paymentPopups/PaymentSuccess';
import PaymentCancel from './paymentPopups/PaymentCancel';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';


function App() {

  const containerRef = useRef(null);
  const [paymentActive, setPaymentActive] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");
    if (payment === "success") setPaymentActive("PaymentSuccess");
    if (payment === "cancel") setPaymentActive("PaymentCancel");
  }, []);

  useEffect(() => {
    const scrollToSection = () => {
      const path = location.pathname.toLowerCase();
      let elementId = '';

      if (path === '/' || path === '' || path.endsWith('index.html')) {
        elementId = 'Home';
      } else if (path.includes('recognition')) {
        elementId = 'Recognition';
      } else if (path.includes('product')) {
        elementId = 'Product';
      } else if (path.includes('gallery')) {
        elementId = 'Gallery';
      }

      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Scroll immediately
    scrollToSection();

    // Retry after short delay to ensure layout is ready (images/fonts loading)
    const timer = setTimeout(() => {
      scrollToSection();
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app" ref={containerRef} >
      <div className={'header'} >
        <Nav containerRef={containerRef} />
      </div>

      <div className="main">
        <Home />
        <Recognition />
        <Product setPaymentActive={setPaymentActive} />
        <Gallery />
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
