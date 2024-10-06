import React from "react";

const MobileFooter = () => {
    return (
        <section className="footer-wrapper">
            <div className="footer-section">
                <div className="footer-container">
                    <img className="logo footer" src="../svg/logo-white.svg" alt="Ket Logo"/>
                </div>
                <div className="link-section">
                    <a href="https://github.com/Erenco16/climate_data_visualization_project" target="_blank">
                        <img className="logo footer" src="../svg/github-logo.svg" alt="GitHub Logo"/>
                    </a>
                </div>
                <div className="nasa-spaceapps-logo">
                    <img className="logo footer" src="../nasa-spaceapps-logo.webp" alt="NASA SpaceApps Logo"/>
                </div>
            </div>

            <div className="contributors-section">
                <p>Contributors: Kishoardaran Rames, Eren Basaran, and Timmy Liu. Developed for the NASA SpaceApps Hackathon 2024.</p>
            </div>
        </section>
    )
}

export default MobileFooter;