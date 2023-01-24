import React from 'react';
import './Reno.scss';
import tabletRound from '../../assets/photos/reno/tablet-round.svg';
import orange from '../../assets/photos/reno/orange-palette.svg';
import darkBlue from '../../assets/photos/reno/blue-darker-palette.svg';
import lightBlue from '../../assets/photos/reno/blue-lighter-palette.svg';
import violet from '../../assets/photos/reno/violet-palette.svg';
import icons from '../../assets/photos/reno/icons.svg';
import texts from '../../assets/photos/reno/texts.svg';
import roundLines from '../../assets/photos/reno/04-round.svg';
import loginPhone from '../../assets/photos/reno/login-phone.svg';
import bidPhone from '../../assets/photos/reno/bid-phone.svg';
import phoneRound from '../../assets/photos/reno/phone-round.svg';
import dotsSix from '../../assets/photos/reno/dots-6.svg';
import roundSix from '../../assets/photos/reno/round-6.svg';
import tabletSix from '../../assets/photos/reno/tablet-2.svg';
import orangeRound from '../../assets/photos/reno/orange-round-2.svg';
import tabletOne from '../../assets/photos/reno/mini-tablet-1.svg';
import tabletTwo from '../../assets/photos/reno/mini-tablet-2.svg';
import tabletThree from '../../assets/photos/reno/mini-tablet-3.svg';
import tabletFour from '../../assets/photos/reno/mini-tablet-4.svg';
import decorationBlue from '../../assets/photos/reno/blue-round-bottom.svg';
import decorationLike from '../../assets/photos/reno/likes-round.svg';
import { Link } from 'react-router-dom';


export const Reno = () => {
    return (
        <div className='reno'>
            <div className='reno__first'>
                <div className='reno__first-container'>
                    <div className='reno-first-text'>
                        <div className='reno-first-text__number'>
                            <p className='reno-first-text__number-num'>01</p>
                            <span className='reno-first-text__number-letters'>Web <span>Design</span></span>
                        </div>
                        <div className='reno-first-desc'>
                            <div className='reno-first-desc__title'>
                                Reno Planet
                            </div>
                            <div className='reno-first-desc__txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequats.</div>
                        </div>
                    </div>
                    <div className='reno-first-photo'>
                        <img className='reno-first-photo__img' src={require('../../assets/photos/reno/tablet-1.png')} alt="tablet"/>
                        <div className='reno-first-photo__round'>
                            <img className='reno-first-photo__round-img' src={tabletRound} alt="round"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reno__second'>
                <div className='reno__second-container'>
                    <div className='reno-second-text'>
                        <p className='reno-second-text__num'>02</p>
                        <span className='reno-second-text__letters'>Colors Palette</span>
                    </div>
                    <div className='reno-second-colors'>
                        <div className='reno-second-colors__box'>
                            <img className='reno-second-colors__box-img' src={orange} alt="orange"/>
                        </div>
                        <div className='reno-second-colors__box'>
                            <img className='reno-second-colors__box-img' src={darkBlue} alt="dark-blue"/>
                        </div>
                        <div className='reno-second-colors__box'>
                            <img className='reno-second-colors__box-img' src={lightBlue} alt="light-blue"/>
                        </div>
                        <div className='reno-second-colors__box'>
                            <img className='reno-second-colors__box-img' src={violet} alt="violet"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='reno__icons'>
                <div className='reno__icons-container'>
                    <div className='reno-icons-photo'>
                        <img className='reno-second-colors__box-img' src={icons} alt="icons"/>
                    </div>
                    <div className='reno-icons-text'>
                        <p className='reno-icons-text__num'>03</p>
                        <span className='reno-icons-text__letters'>Icons</span>
                    </div>
                </div>
            </div>
            <div className='reno__general'>
                <div className='reno__general-font'>
                    <img src={texts} alt="texts"/>
                </div>
                <div className='reno__general-orange'>
                    <img src={orangeRound} alt="round"/>
                </div>
                <div className='reno-general__four reno-general-four'>
                    <div className='reno-general-four__text'>
                        <p className='reno-general-four__text-num'>04</p>
                        <span className='reno-general-four__text-letters'>Typography</span>
                        <img className='reno-general-four__text-round' src={roundLines} alt="round"/>
                    </div>
                </div>
                <div className='reno-general__five reno-general-five'>
                    <div className='reno-general-five__text'>
                        <p className='reno-general-five__text-num'>05</p>
                        <span className='reno-general-five__text-letters'>Mobile Design</span>
                    </div>
                    <div className='reno-general-five__login'>
                        <img className='reno-general-five__login-img' src={loginPhone} alt="login phone"/>
                        <div className='reno-general-five__login-round'>
                            <img src={phoneRound} alt="round"/>
                        </div>
                    </div>
                    <div className='reno-general-five__bid'>
                        <img className='reno-general-five__bid-img' src={bidPhone} alt="bid phone"/>
                    </div>
                </div>
                <div className='reno-general__six reno-general-six'>
                    <div className='reno-general-six__text'>
                        <p className='reno-general-six__text-num'>06</p>
                        <span className='reno-general-six__text-letters'>Profile</span>
                        <img className='reno-general-six__text-round' src={dotsSix} alt="dots"/>
                    </div>
                    <div className='reno-general-six__photo'>
                        <img className='reno-general-six__photo-img' src={tabletSix} alt="tablet"/>
                    </div>
                    <img className='reno-general-six__rounded' src={roundSix} alt="round"/>
                </div>
            </div>
            <div className='reno__tablets'>
                <div className='reno__tablets-first'>
                    <img className='tablets-first-picture' src={tabletOne} alt="tablet"/>
                    <img className='tablets-first-picture' src={tabletTwo} alt="tablet"/>
                </div>
                <div className='reno__tablets-second'>
                    <img className='tablets-second-picture' src={tabletThree} alt="tablet"/>
                    <img className='tablets-second-picture' src={tabletFour} alt="tablet"/>
                </div>
            </div>
            <div className='reno__decoration'>
                <div className='reno__decoration-blue'>
                    <img src={decorationBlue} alt="blue round"/>
                </div>
                <div className='reno__decoration-orange'>
                    <img src={decorationLike} alt="orange round"/>
                </div>
            </div>
            <footer className="miia__gen-check check">
                <h1 className="check__title rehab-bottom-gen">Check out more projects</h1>
                <div className="check__projects">
                    <div className="check__projects-inset inset">
                        <Link to="/miia/" className="inset__photo">
                            <img
                                className="inset__photo-item"
                                src={require("../../assets/photos/miia/miia.png")}
                                alt="Rehab Finder"
                            />
                        </Link>
                        <h3 className="inset__title rehab-bottom-tit">Miia</h3>
                        <p className="inset__text">E-commerce platform</p>
                    </div>
                    <div className="check__projects-inset inset">
                        <Link to="/reno/" className="inset__photo-item">
                            <img
                                className="inset__photo"
                                src={require("../../assets/photos/miia/rehab.png")}
                                alt="Reno"
                            />
                        </Link>
                        <h3 className="inset__title rehab-bottom-tit">Rehab Finder</h3>
                        <p className="inset__text">MCQ platform</p>
                    </div>
                    <div className="check__projects-inset inset">
                        <Link to="/newme-clinics/" className="inset__photo">
                            <img
                                className="inset__photo-item"
                                src={require("../../assets/photos/miia/newme.png")}
                                alt="NewMe clinics"
                            />
                        </Link>
                        <h3 className="inset__title rehab-bottom-tit">NewMe Clinics</h3>
                        <p className="inset__text">Online beauty clinic</p>
                    </div>
                    <div className="check__projects-inset inset">
                        <Link to="/ivala-learn/" className="inset__photo">
                            <img
                                className="inset__photo-item"
                                src={require("../../assets/photos/miia/ivala.png")}
                                alt="Ivala learn"
                            />
                        </Link>
                        <h3 className="inset__title rehab-bottom-tit">IVALA Learn</h3>
                        <p className="inset__text">MCQ platform</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}