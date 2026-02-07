import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from './Product.module.css';

const Product = ({ setPaymentActive }) => {

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const benefitsRef = useRef(null);

    const productInfo = {
        title: "From Home-Level to Chef-Level Pastry",
        amount: "10",
    };

    const scrollToBenefits = () => {
        if (benefitsRef.current) {
            benefitsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    const benefitsItems = [
        { icon: "ri-restaurant-line", description: "Learn the core pastry techniques professionals rely on, explained in a clear, beginner-friendly way." },
        { icon: "ri-cake-2-line", description: "Stop guessing why one batch works and the next doesn’t. Build a repeatable method so your desserts come out reliable every time." },
        { icon: "ri-knife-line", description: "Master the small details that make desserts look expensive — clean edges, smooth finishes, and elegant presentation." },
        { icon: "ri-timer-flash-line", description: "Organize your process like a pro so you’re not scrambling mid-bake. Faster prep and fewer mistakes." },
        { icon: "ri-line-chart-line", description: "Know what to do when something goes wrong and how to fix it without panicking." },
    ];

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };





    const PAYPAL_CLIENT_ID = 'AXGkIV7ybLqa29F_XqQNmErjOjbtNuKydQz4NCa-KghL3AMVCmmdNlBhKiLpfeFqBFzFDu2-A-iMP3Rl'





    return (
        <div id="Product" className={styles.ProductContainer}>
            {/* HEADER */}
            <motion.div
                className={styles.ProductHeader}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1>Bake It Right</h1>
                <p>For bakers who want more than recipes, this is the craft</p>
            </motion.div>

            {/* MAIN PRODUCT CONTENT */}
            <div className={styles.ProductContent}>
                {/* LEFT TEXT */}
                <motion.div
                    className={styles.ProductContentContainer}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className={styles.ProductContentHeader}>
                        <h1>Ebook</h1>
                    </div>

                    <div className={styles.ProductContentBody}>
                        <h1>{productInfo.title}</h1>
                        <p>
                            Learn the exact fundamentals and finishing techniques that separate “homemade” from “chef-made”.
                            Improve texture, consistency, plating, and overall quality.
                        </p>

                        <div className={styles.ProductContentBodyButton}>
                            {/* PAYPAL */}
                            <div style={{ marginTop: 16 }}>
                                <PayPalScriptProvider
                                    options={{
                                        clientId: PAYPAL_CLIENT_ID,
                                        currency: productInfo.currency,
                                        intent: "capture",
                                    }}
                                >
                                    <PayPalButtons
                                        style={{ layout: "vertical" }}
                                        createOrder={async () => {
                                            const res = await fetch(`https://aishabackend-6h3t.onrender.com/api/create-order`, {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({
                                                    amount: productInfo.amount,
                                                    currency: productInfo.currency,
                                                    email,
                                                }),
                                            });

                                            const data = await res.json();





                                            return data.id;
                                        }}
                                        onApprove={async (data) => {

                                            const res = await fetch(`https://aishabackend-6h3t.onrender.com/api/capture-order`, {
                                                method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                body: JSON.stringify({
                                                    id: data.orderID,
                                                    email,
                                                }),
                                            });

                                            const details = await res.json();





                                            setEmail("");
                                            setIsEmailValid(false);

                                            console.log("Capture details:", details);



                                            setPaymentActive("PaymentSuccess");
                                        }}
                                        onCancel={() => {
                                            setPaymentActive("PaymentCancel");
                                        }}

                                    />
                                </PayPalScriptProvider>

                            </div>
                        </div>

                        <div className={styles.ProductContentPrice}>
                            <div className={styles.price}>
                                <p>Price</p>
                                <p>${productInfo.amount}</p>
                            </div>

                            <div className={styles.why} onClick={scrollToBenefits}>
                                <p>Why buy this Ebook?</p>
                                <i className="ri-arrow-down-circle-line"></i>
                            </div>
                        </div>


                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className={styles.ProductContentEbook}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img src="Images/Ebook/ebook.png" alt="Ebook" />
                </motion.div>
            </div>

            {/* BENEFITS SECTION */}
            <div ref={benefitsRef} className={styles.ProductLearnContainer}>
                <motion.div
                    className={styles.ProductLearnHeader}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className={styles.title}>
                        <h1>Benefits</h1>
                        <p>Not just recipes — real pastry skills that upgrade your desserts, your workflow, and your confidence.</p>
                    </div>

                    <a href="#Product">
                        <button>
                            Order ebook <i className="ri-shopping-bag-3-line"></i>
                        </button>
                    </a>

                    <img src="Images/benefits.svg" alt="" />
                </motion.div>

                <div className={styles.ProductLearnGrid}>
                    {benefitsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.ProductLearnGridItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <i className={item.icon}></i>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;