import React from "react";
import GYBO from "../img/GYBO.png";
import PSB from "../img/PSB.png"
import NS from "../img/NS.png";
import CC from "../img/CC.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

function Portfolio() {
    //GYBO
    const openPopupboxGYBO = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={GYBO} alt="Get Your Beer On" />
            <p>Get Your Beer On is a web application for users looking for their next favorite brewery or beer.</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://get-your-beer-on.herokuapp.com/")}>https://get-your-beer-on.herokuapp.com/</a><br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/fiixed/Get-Your-Beer-On")}>https://github.com/fiixed/Get-Your-Beer-On</a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigGYBO = {
        titleBar: {
            enable: true,
            text: "Get Your Beer On"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };

    //PSB
    const openPopupboxPSB = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={PSB} alt="Pig Skin Bets" />
            <p>Pig Skin Bets is an online sportsbook for people that are looking to make their Sundays a little more interesting.</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://sleepy-harbor-60617.herokuapp.com/")}>https://sleepy-harbor-60617.herokuapp.com/</a><br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/n-ochs/pigskinbets")}>https://github.com/n-ochs/pigskinbets</a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigPSB = {
        titleBar: {
            enable: true,
            text: "Pig Skin Bets"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };

    //NS
    const openPopupboxNS = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={NS} alt="Nick Says" />
            <p>NickSays is a simple, yet challenging memory game. It is designed after Simon-Says. Test your memory today and add your high score to the leaderboard!</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://nick-says.netlify.app/")}>https://nick-says.netlify.app/</a><br/>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/n-ochs/nicksays")}>https://github.com/n-ochs/nicksays</a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigNS = {
        titleBar: {
            enable: true,
            text: "Nick Says"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };

    //CC
    const openPopupboxCC = () => {
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={CC} alt="Crypto Cave" />
            <p>Crypto Cave is an online portal to keep track of your own portfolio, trending cryptocurrencies, and more!</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://cryptocave.netlify.app/")}>https://cryptocave.netlify.app/</a><br/>
            <b>Github (Front End):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/n-ochs/cryptocave")}>https://github.com/n-ochs/cryptocave</a><br/>
            <b>Github (Back End):</b> <a className="hyper-link" onClick={() => window.open("https://github.com/n-ochs/cryptocave-backend")}>https://github.com/n-ochs/cryptocave-backend</a>
            </>
        );
        PopupboxManager.open({ content });
    };

    const popupboxConfigCC = {
        titleBar: {
            enable: true,
            text: "Crypto Cave"
        },
        fadeIn: true,
        fadeInSpeed: 500
    };



    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>

                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxGYBO}>
                        <img className="portfolio-image" src={GYBO} alt="Get Your Beer On" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                    <div className="portfolio-image-box" onClick={openPopupboxPSB}>
                        <img className="portfolio-image" src={PSB} alt="Pig Skin Bets" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>

                    <div className="portfolio-image-box" onClick={openPopupboxNS}>
                        <img className="portfolio-image" src={NS} alt="Nick Says" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>

                    <div className="portfolio-image-box" onClick={openPopupboxCC}>
                        <img className="portfolio-image" src={CC} alt="Crypto Cave" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigGYBO} />
            <PopupboxContainer {...popupboxConfigPSB} />
            <PopupboxContainer {...popupboxConfigNS} />
            <PopupboxContainer {...popupboxConfigCC} />
        </div>
    );
};

export default Portfolio;