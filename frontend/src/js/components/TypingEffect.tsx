import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    typingSpeed?: number;
    className?: string; // Optional class name for styling
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typingSpeed = 100, className }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

    useEffect(() => {
        if (currentCharIndex < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(currentCharIndex));
                setCurrentCharIndex(currentCharIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeoutId);
        }
    }, [currentCharIndex, text, typingSpeed]);

    return <>{displayedText}</>;
};

export default TypingEffect;