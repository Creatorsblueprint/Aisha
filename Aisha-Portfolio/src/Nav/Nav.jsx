import { useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ containerRef }) => {
    const [hamMenu, setHamMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    let lastScrollTop = 0;


    useEffect(() => {

        const container = containerRef.current;


        const isScrolling = (event) => {





            let currentScrollTop = event.target.scrollTop;

            // if currentScroll top is greater that last know scroll top postion set nav as visible else hidden
            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
                console.log("scrolling down")
            } else if (currentScrollTop < lastScrollTop) {
                setIsVisible(true);
                console.log("scrolling up")
            }

            // update lastScrollTop to currentscrll top 
            lastScrollTop = currentScrollTop;

        }


        container.addEventListener('scroll', isScrolling);

        return () => {
            container.removeEventListener('scroll', isScrolling);
        }

    }, [lastScrollTop]); // rune everytime isvisbile changes 





    return (

        <>
            <AnimatePresence>
                <motion.div
                    key={isVisible}
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -60 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={isVisible === true ? styles.navContainer : styles.navContainer_hidden}
                >

                    <nav >
                        <ul>
                            <div className={styles.nav_logo}>
                                <Link to="/">
                                    <img src="/Images/Logos/nav_logo.svg" alt="Logo" />
                                </Link>
                            </div>
                            <div className={styles.nav_links}>
                                <li className={location.pathname === '/' ? styles.active : ''}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={location.pathname === '/recognition' ? styles.active : ''}>
                                    <Link to="/recognition" >Recognition</Link>
                                </li>
                                <li className={location.pathname === '/product' ? styles.active : ''}>
                                    <Link to="/product" >Product</Link>
                                </li>
                                <li className={location.pathname === '/gallery' ? styles.active : ''}>
                                    <Link to="/gallery" >Gallery</Link>
                                </li>
                            </div>
                            <div className={styles.nav_contact}>
                                <div className={styles.socials}>
                                    <a href="https://www.facebook.com/hijabigram" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@Aisharay_vlogs" target="_blank" rel="noreferrer">
                                        <i className="ri-youtube-fill"></i>
                                    </a>
                                    <a href="https://www.instagram.com/aisharay_vlogs/" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-fill"></i>
                                    </a>
                                </div>
                                <a href="https://www.instagram.com/aisharay_vlogs/" target="_blank" rel="noreferrer" className={styles.contact}>
                                    <span>Let's Talk
                                    </span>
                                    <i className="ri-arrow-right-up-line"></i>
                                </a>
                            </div>
                        </ul>
                    </nav>


                </motion.div>
            </AnimatePresence>

            <div className={styles.hamburgerContainer}>
                <div className={styles.hamHeader}>
                    <div className={styles.nav_logo}>
                        <Link to="/">
                            <img src="/Images/Logos/nav_logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <img
                        src="/Images/hamburger.svg"
                        alt="Menu"
                        className={styles.hamburgerIcon}
                        onClick={(e) => { e.preventDefault(); setHamMenu(true) }}
                    />
                </div>

                <AnimatePresence>
                    {hamMenu === true ? (
                        <motion.div
                            className={styles.hamMenuActive}
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <div className={styles.close}>
                                <img src="/Images/close.svg" alt="Close" className={styles.closeIcon} onClick={(e) => { e.preventDefault(); setHamMenu(false) }} />
                            </div>

                            <ul>
                                <li>
                                    <i className="ri-home-6-line"></i>
                                    <Link to="/" onClick={() => setHamMenu(false)}>Home</Link>
                                </li>
                                <li>
                                    <i className="ri-meteor-line"></i>
                                    <Link to="/recognition" onClick={() => setHamMenu(false)} >Recognition</Link>
                                </li>
                                <li>
                                    <i className="ri-shopping-cart-2-line"></i>
                                    <Link to="/product" onClick={() => setHamMenu(false)} >Product</Link>
                                </li>
                                <li>
                                    <i className="ri-multi-image-line"></i>
                                    <Link to="/gallery" onClick={() => setHamMenu(false)} >Gallery</Link>
                                </li>
                            </ul>

                            <div className={styles.media}>

                                <h1>
                                    Media
                                </h1>

                                <div className={styles.socials}>
                                    <a href="https://www.instagram.com/aisharay_vlogs/" target="_blank" rel="noreferrer">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                    <a href="https://www.facebook.com/hijabigram" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@Aisharay_vlogs" target="_blank" rel="noreferrer">
                                        <i className="ri-youtube-line"></i>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.copyright}>
                                <p>
                                    © 2025 CreatorsBlueprint. All rights reserved. | www.creatorsblueprint.com
                                </p>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>

        </>

    );
};

export default Nav;
