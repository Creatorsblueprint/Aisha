import { useEffect } from "react";
import styles from './paymentPage.module.css';

export default function PaymentSuccess({ setPaymentActive }) {
  useEffect(() => {
    const timer = setTimeout(() => setPaymentActive(false), 2000);
    return () => clearTimeout(timer);
  }, [setPaymentActive]);

  return (
    <div className={styles.overlay}>
      <div className={styles.cardSuccess}>
        <h1>Payment Successful!</h1>
        <p>Ebook will be sent to your email automatically (if not, please check your spam folder)</p>

      </div>
    </div>
  );
}