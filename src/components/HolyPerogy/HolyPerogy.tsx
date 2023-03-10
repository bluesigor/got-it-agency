import "./HolyPerogy.scss";
import { Link } from "react-router-dom";

import display from "../../assets/photos/holy-perogy/display.svg";
import screen_inner from "../../assets/photos/holy-perogy/screen-inner.svg";
import mobile_logo from "../../assets/photos/holy-perogy/mobile-logo.svg";
import mobile_logo_small from "../../assets/photos/holy-perogy/mobile-logo-small.svg";
import cereals from "../../assets/photos/holy-perogy/cereals.svg";
import mint from "../../assets/photos/holy-perogy/mint.svg";
import tablet_perogy from "../../assets/photos/holy-perogy/tablet-perogy.svg";
import tablet_end from "../../assets/photos/holy-perogy/tablet-end.svg";
import bottom_tablet from "../../assets/photos/holy-perogy/bottom-tablet.svg";
import bottom_tablet_desk from "../../assets/photos/holy-perogy/bottom-tablet-desk.svg";
import menu from "../../assets/photos/holy-perogy/menu-tablet.svg";
import website_logo from "../../assets/photos/holy-perogy/website-logo.svg";
import footer_mobile from "../../assets/photos/holy-perogy/footer-mobile.svg";
import footer_desk from "../../assets/photos/holy-perogy/banner-footer-desktop.svg";
import home_logo from "../../assets/photos/holy-perogy/home-logo.svg";
import design_logo from "../../assets/photos/holy-perogy/design-logo.svg";
import newme from "../../assets/photos/canadian-center/newme.svg";
import miia from "../../assets/photos/canadian-center/miia.svg";
import reno from "../../assets/photos/canadian-center/reno.svg";
import catering from "../../assets/photos/canadian-center/catering.svg";
import next_proj from "../../assets/photos/holy-perogy/next-proj.svg";

const HolyPerogy = () => {
  return (
    <div className="perogy">
      <section className="perogy-welcome">
        <div className="perogy-welcome-first">
          <h3 className="perogy-welcome-first__title">Website design</h3>
        </div>
        <div className="perogy-welcome-second"></div>
        <div className="perogy-welcome-third">
          <h6 className="perogy-welcome-third__year ">2019</h6>
        </div>
      </section>
      <section className="perogy-palette palette">
        <img src={display} alt="display" className="palette__display" />
        <img src={screen_inner} alt="screen_inner" className="palette__inner" />
        <img
          src={require("../../assets/photos/holy-perogy/palette-logo.png")}
          alt="pallete-logo"
          className="palette__main-palette-logo"
        />
      </section>
      <section className="perogy-fonts-example fonts-example"></section>
      <section className="perogy-mobile-design mobile-design">
        <div className="mobile-design-header">
          <h4 className="mobile-design-header__title">Mobile</h4>
          <div className="mobile-design-header__horizontal"></div>
        </div>
        <img src={mint} alt="mint" className="mobile-design__mint" />
        <div className="mobile-design-bottom">
          <img
            src={mobile_logo}
            alt="mobile_logo"
            className="mobile-design-bottom__logo"
          />
          <img
            src={mobile_logo_small}
            alt="mobile_logo_small"
            className="mobile-design-bottom__logo-small"
          />
        </div>
      </section>
      <section className="perogy-desktop-design desktop-design">
        <div className="desktop-design-header">
          <h4 className="desktop-design-header__title">Desktop</h4>
          <div className="mobile-design-header__horizontal"></div>
        </div>
        <img src={cereals} alt="cereals" className="desktop-design__cereals" />
        <img
          src={website_logo}
          alt="website_logo"
          className="desktop-design__website-logo"
        />
        <img
          src={tablet_perogy}
          alt="tablet_perogy"
          className="desktop-design__tablet-perogy"
        />
        <img
          src={tablet_end}
          alt="tablet_end"
          className="desktop-design__tablet-end"
        />
        <img
          src={bottom_tablet_desk}
          alt="bottom_tablet"
          className="desktop-design__tablet-bottom-desk"
        />
        <img
          src={bottom_tablet}
          alt="bottom_tablet"
          className="desktop-design__tablet-bottom-start"
        />
        <img
          src={menu}
          alt="menu"
          className="desktop-design__tablet-bottom-menu"
        />
        <img
          src={require("../../assets/photos/holy-perogy/menu-mobile.png")}
          alt="mobile_menu"
          className="desktop-design__mobile-menu"
        />
      </section>
      <section className="perogy-banner-footer banner-footer">
        <img
          src={footer_mobile}
          alt="footer_mobile"
          className="banner-footer__footer-mobile"
        />
        <img
          src={footer_desk}
          alt="footer_desk"
          className="banner-footer__footer-desk"
        />
        <img
          src={home_logo}
          alt="home_logo"
          className="banner-footer__home-logo"
        />
        <img
          src={design_logo}
          alt="design_logo"
          className="banner-footer__design-logo"
        />
      </section>
      <footer className="perogy-projects-footer projects-footer">
        <h1 className="projects-footer__title">Check out more projects</h1>
        <ul className="projects-footer__list">
          <li>
            <Link to={"/portfolio/miia"}>
              <img
                className="projects-footer__list-logo"
                src={miia}
                alt="miia"
              />
            </Link>
          </li>
          <li>
            <Link to={"/portfolio/clinics"}>
              <img
                className="projects-footer__list-logo"
                src={newme}
                alt="newme"
              />
            </Link>
          </li>
          <li>
            <Link to={"/portfolio/reno"}>
              <img
                className="projects-footer__list-logo reno"
                src={reno}
                alt="reno"
              />
            </Link>
          </li>
          <li>
            <Link to={"/portfolio/reno"}>
              <img
                className="projects-footer__list-logo"
                src={catering}
                alt="catering"
              />
            </Link>
          </li>
        </ul>
      </footer>
      <section className="perogy__next-project next-project">
        <div className="next-project-content-block">
          <h1 className="next-project-content-block__title">Time to eat</h1>
          <h4 className="next-project-content-block__subtitle">Next project</h4>
        </div>
        <img src={next_proj} alt="next_proj" className="next-project__logo" />
      </section>
    </div>
  );
};

export default HolyPerogy;
