import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import styles from './Product.module.css';

const Product = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const benefitsRef = useRef(null);





    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsValidEmail(validateEmail(val));
    };


    const productInfo = {
        title: "From Home-Level to Chef-Level Pastry",
        amount: "25",
        successUrl: "https://lebohangdev.github.io/Aisha/?payment=success",
        cancelUrl: "https://lebohangdev.github.io/Aisha/?payment=cancel",
    };

    async function handleZinnaPayment(bookChoice) {
        try {
            const paidBook = {
                amount: bookChoice.amount,
                title: bookChoice.title,
                email: email,
                successUrl: bookChoice.successUrl,
                cancelUrl: bookChoice.cancelUrl,
            }
            console.log(paidBook);

            const res = await fetch('https://aishabackend-6h3t.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paidBook),
            });
            console.log(paidBook);

            const data = await res.json()
            console.log("data:", data);

            if (data.redirect_url) {
                window.location.href = data.redirect_url;
                console.log("redirect url:", data.redirect_url)
            } else {
                console.error("No redirect_url found in response", data);
            }

        } catch (e) {
            console.error("failed to send request to create payment session for user:", e)
        }
    }

    const handleCheckout = (product) => {
        handleZinnaPayment(product);
    };

    const softFadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const buttonHover = { scale: 1.02 };





    const benefitsItems = [
        { icon: "ri-restaurant-line", description: "Learn the core pastry techniques professionals rely on, explained in a clear, beginner-friendly way." },
        { icon: "ri-cake-2-line", description: "Stop guessing why one batch works and the next doesn’t. Build a repeatable method so your desserts come out reliable every time." },
        { icon: "ri-knife-line", description: "Master the small details that make desserts look expensive — clean edges, smooth finishes, and elegant presentation." },
        { icon: "ri-timer-flash-line", description: "Organize your process like a pro so you’re not scrambling mid-bake. Faster prep and fewer mistakes." },
        { icon: "ri-line-chart-line", description: "Know what to do when something goes wrong and how to fix it without panicking." },
    ];











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
                            <motion.div
                                className={styles.productEmailField}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={softFadeUp}
                            >
                                <p className={isValidEmail ? styles.valid : styles.invalid}>*Enter a valid email</p>
                                <input
                                    type="text"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={handleEmailChange}
                                />
                                <motion.button
                                    disabled={!isValidEmail}
                                    whileHover={isValidEmail ? buttonHover : ""}
                                    onClick={() => { handleCheckout(productInfo); setEmail(''); }}
                                >
                                    GET STARTED NOW!
                                </motion.button>
                            </motion.div>

                            <motion.div
                                className={styles.priceContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={softFadeUp}
                            >
                                <h1>Price</h1>
                                <p>AED 25</p>
                                <p>After payment, eBook will be sent to given email (Check spam/junk folder if you dont see it in a few minutes.)</p>
                            </motion.div>
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