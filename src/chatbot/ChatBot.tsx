import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.defer = true;
        script.setAttribute('chatbotId', 'DVyiU-Ouh4SVB-TElp8Xk');
        script.setAttribute('domain', 'www.chatbase.co');

        // Append script to the body
        document.body.appendChild(script);

        // Cleanup function
        return () => {
            // Remove script when component unmounts
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div id="chatbot-container">
            {/* This div will be replaced by the chatbot */}
        </div>
    );
};

export default Chatbot;
