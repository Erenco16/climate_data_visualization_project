import React, { CSSProperties } from "react";
import Header from './Header'
import { motion } from "framer-motion";
import TypingEffect from './TypingEffect';

const LandingPage = () => {

    const handleButtonClick = (buttonName: string) => {
        console.log(`${buttonName} clicked`);
    };

    const TitleStyle: CSSProperties = {
        fontSize: '70px',
        fontWeight: 'bold',
        color: '#00ED64',
        margin: "0px",
    };

    const buttonVariants = {
        initial: { opacity: 0, y: 20, transition: { duration: 0.5 } }, // Start faded out and slightly below
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },  // Fade in and slide up
        whileHover: { scale: 1.1, transition: { duration: 0.5 } },     // Scale up when hovered
      };

      return (
        <>
            <section>
                <Header />
                <div className="content-container">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 style={TitleStyle}>A Study and Analysis of Climate Change</h1>
                    </motion.div>
                    <motion.div>
                        <TypingEffect 
                            text="And a story of how we interpret data" 
                            typingSpeed={100} 
                            className="fade-in" 
                        />
                    </motion.div>
                    <div className="button-container">
                        <motion.button
                            className="b1"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="whileHover"
                            onClick={() => handleButtonClick("Button 1")}
                        >
                            Presentation View
                        </motion.button>
                        <motion.button
                            className="b2"
                            variants={buttonVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="whileHover"
                            onClick={() => handleButtonClick("Button 2")}
                        >
                            Data View
                        </motion.button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;