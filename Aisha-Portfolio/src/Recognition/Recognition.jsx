import { motion } from "framer-motion";
import styles from './Recognition.module.css';

const Recognition = () => {

    const recognitionItems = [
        {
            title: "Gulf Magazine Feature",
            text: (
                <>
                    Featured by <a href="https://gulfmagazine.co/category/entrepreneurs/" target="_blank" rel="noreferrer"><span>Gulf Magazine</span><i className="ri-arrow-right-up-line"></i></a>, Aisha’s story highlights her bold pivot from a medicine path (NEET) into pastry, and how she built her career through consistency, long kitchen hours, and relentless learning, now carving a name for herself in Saudi Arabia (Red Sea Island).
                </>
            ),
            image: "Images/recognition/rec_1.jpg",
        },
        {
            title: "Mena Stories Feature",
            text: (
                <>
                    Featured in <a href="https://menastories.me/article/aisha-ray-fasal-from-medicine-to-master-pastry-chef" target="_blank" rel="noreferrer"><span>MENA Stories</span><i className="ri-arrow-right-up-line"></i></a>, Aisha’s journey is recognized for the uncommon leap from medicine into pastry — showcasing her ambition, discipline, and commitment to becoming chef-level early in her career.
                </>
            ),
            image: "Images/recognition/rec_2.png",
        },
        {
            title: "Makkani Magazine Feature",
            text: (
                <>
                    Aisha’s second magazine feature was highlighted in <a href="https://www.instagram.com/p/DRVDsmqApBX/?igsh=ZzFtNXRsY2hpdGxt" target="_blank" rel="noreferrer"><span>Makkani Magazine’s</span><i className="ri-arrow-right-up-line"></i></a> very first issue (Pages 26–27), marking an early milestone in her culinary career. Being selected for a debut edition reflects recognition of her journey and craft at a formative stage, spotlighting her growth, discipline, and rising presence as a pastry chef.
                </>
            ),
            image: "Images/recognition/rec_3.png",
        },
    ];

    return (
        <div id="Recognition" className={styles.sectionContainer}>
            <div className={styles.contentGrid}>

                {/* LEFT COLUMN */}
                <motion.div
                    className={styles.leftColumn}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className={styles.sectionHeader}>
                        <h1>Culinary Recognition Celebration</h1>
                        <p>Discover my journey to achieving culinary excellence through my recognitions in the UAE</p>
                    </div>

                    <motion.div
                        className={styles.mainImageContainer}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src="Images/Aisha/Aisha_1.png" alt="Aisha Portrait" />
                    </motion.div>
                </motion.div>

                {/* RIGHT COLUMN */}
                <div className={styles.rightColumn}>
                    {recognitionItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.recognitionCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.cardText}>
                                <div className={styles.itemHeader}>
                                    <span className={styles.itemNumber}>0{index + 1}</span>
                                    <h3>{item.title}</h3>
                                </div>
                                <div className={styles.itemText}>{item.text}</div>
                            </div>

                            <div className={styles.cardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Recognition;
