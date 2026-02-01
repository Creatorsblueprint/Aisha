import { motion } from "framer-motion";
import styles from './Home.module.css';

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id='Home' className={styles.homeContainer}>
            <div className={styles.wrapper}>
                {/* Left Image */}
                <motion.div
                    className={styles.homeContent1}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img src="Images/Hero/hero_1.png" alt="" />
                </motion.div>

                {/* Right Text */}
                <motion.div
                    className={styles.homeContent2}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.heroTextContainer}>
                        <motion.div
                            className={styles.wordRow}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span>PRECISION</span>
                            <span>CREATIVITY</span>
                            <span>DISCIPLINE</span>
                            <span>PATIENCE</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                        >
                            A young pastry chef focused on mastering the craft and <span>making it teachable.</span> With the right guidance, anyone can bake better. confidence comes from clear direction, strong fundamentals, and learning the details that <span>actually matter.</span>
                        </motion.p>

                        <motion.div
                            className={styles.ctaRow}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <button className={styles.btnPrimary} onClick={() => scrollToSection('Recognition')}>Learn more</button>
                            <button className={styles.btnSecondary} onClick={() => scrollToSection('Product')}>BUY PRODUCT</button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
