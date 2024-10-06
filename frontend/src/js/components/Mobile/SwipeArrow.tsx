import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeArrow = () => {
    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 15, opacity: 0.5 }}
            transition={{
                y: {
                    repeat: Infinity, // This makes the animation loop infinitely
                    repeatType: "reverse", // Reverses the direction after each loop
                    duration: 1, // Controls the speed of the loop (1 second per cycle)
                    ease: 'easeInOut', // Smoothens the movement
                },
                opacity: {
                    repeat: Infinity, // Loops opacity change as well
                    repeatType: "reverse", // Fades in and out continuously
                    duration: 1,
                    ease: 'easeInOut',
                },
            }}
            style={{
                position: 'absolute',

                bottom: '20px',
                left: '46.5%',
                transform: 'translateX(-50%)',
                cursor: 'pointer',
            }}
            onClick={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth',
                });
            }}
        >
            <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19,12 12,19 5,12"></polyline>
            </svg>
        </motion.div>
    );
};

export default SwipeArrow;