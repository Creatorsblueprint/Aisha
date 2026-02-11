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
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById('Home');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/recognition') {
      const element = document.getElementById('Recognition');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/product') {
      const element = document.getElementById('Product');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/gallery') {
      const element = document.getElementById('Gallery');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
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
