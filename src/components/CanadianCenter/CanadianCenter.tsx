import "./CanadianCenter.scss";

import canadian_center_logo from "../../assets/photos/canadian-center/canadian_center-logo.svg";
import vertical_side_line from "../../assets/photos/canadian-center/vertical-side-line.svg";
import horizontal_line from "../../assets/photos/canadian-center/horizontal-line.svg";
import trust_logo from "../../assets/photos/canadian-center/trust-logo.svg";
import trust_values from "../../assets/photos/canadian-center/trust-values.svg";
import mask_wrapper from "../../assets/photos/canadian-center/mask-wrapper.svg";

const CanadianCenter = () => {
  return (
    <div className="canadian-center">
      <main className="canadian-center-main-layout">
        <nav className="canadian-center-main-layout-nav">
          <img
            src={canadian_center_logo}
            alt=""
            className="canadian-center-main-layout-nav-logo"
          />
          <ul className="canadian-center-main-layout-nav__list-nav list-nav">
            <li className="list-nav__item">
              Year: <br />
              <span className="list-nav__item-main">October 2020</span>
              <img
                className="vertical-line-first"
                src={vertical_side_line}
                alt="vertical_side_line"
              />
            </li>

            <li className="list-nav__item">
              Role: <br />
              <span className="list-nav__item-main">UX/UI Designe</span>
              <img
                className="vertical-line-second"
                src={vertical_side_line}
                alt="vertical_side_line"
              />
            </li>
            <li className="list-nav__item">
              Platforms: <br />
              <span className="list-nav__item-main">Mobile & Web</span>
            </li>
          </ul>
        </nav>
        <div className="canadian-center-main-layout-title-block">
          <h1 className="canadian-center-main-layout-title-block-txt">
            Canadas premier private facility <br /> for addiction services
          </h1>
        </div>
      </main>
      <section className="canadian-center__treatment-section treatment-section">
        <div className="treatment-section-info-block">
          <h2 className="treatment-section-info-block-title">
            National Leader in Addiction Treatment
          </h2>
          <img
            src={horizontal_line}
            alt="horizontal_line"
            className="line-info-block"
          />
          <span className="treatment-section-info-block-subtitle">
            Our goal will always be simple: to keep our word to our residents
            and help them through every stage of alcohol and drug addiction
            treatment.
            <br />
            <br />
            Our focus on quality care helps us deliver a clear message to anyone
            wanting to overcome addiction in a caring, supportive environment.
            Everything we do and everything we are is a reflection of the
            profound experience we want for those in our care.
          </span>
          <img className="mask_wrapper" src={mask_wrapper} alt="mask_wrapper" />
        </div>
        <div className="treatment-section-logos-block">
          <img
            className="treatment-section-logos-block-trust"
            src={trust_logo}
            alt="trust-logo"
          />
          <img
            className="treatment-section-logos-block-values"
            src={trust_values}
            alt="trust_values"
          />
        </div>
      </section>
      <section className="canadian-center__wireframes-canadian wireframes-canadian">
        <h2 className="wireframes-canadian__title">Wireframes</h2>
        <div className="wireframes-canadian__phones-section"></div>
      </section>
      <section className="canadian-center__pallete-section pallete-section">
        <div className="pallete-section-header">
          <h1 className="pallete-section-header__title">Color palette</h1>
          <div className="pallete-section-header__horizontal-line"></div>
        </div>
        <div className="pallete-section-colors">
          <div className="pallete-section-colors-primary">
            <h5 className="pallete-section-colors-primary__name">
              primary colours
            </h5>
            <div className="pallete-section-colors-primary-box">
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-first"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    2F2E2E
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 47
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 46
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 46
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-second"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    837165
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 131
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 113
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 101
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-primary-box__item">
                <div className="pallete-section-colors-primary-box__item-color-third"></div>
                <div className="pallete-section-colors-primary-box__item-color-first-txt">
                  <span className="pallete-section-colors-primary-box__item-color-first-txt-font">
                    A89167
                  </span>
                  <ul className="pallete-section-colors-primary-box__item-color-first-txt-list">
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      R 168
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      G 145
                    </li>
                    <li className="pallete-section-colors-primary-box__item-color-first-txt-list__item">
                      b 103
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pallete-section-colors-secondary">
            <h5 className="pallete-section-colors-secondary__name">
              secondary colours
            </h5>
            <div className="pallete-section-colors-secondary-block">
              <div className="pallete-section-colors-secondary-block-box-first colour-block">
                <div className="pallete-section-colors-secondary-block-box-first-color"></div>
                <div className="pallete-section-colors-secondary-block-box-first-txt">
                  <span className="rgb-color-title">524B4D</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 82</li>
                    <li className="rgb-colours-list__item">G 75</li>
                    <li className="rgb-colours-list__item">B 77</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-second colour-block">
                <div className="pallete-section-colors-secondary-block-box-second-color"></div>
                <div className="pallete-section-colors-secondary-block-box-second-txt">
                  <span className="rgb-color-title">95867B</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 149</li>
                    <li className="rgb-colours-list__item">G 134</li>
                    <li className="rgb-colours-list__item">B 123</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-third colour-block">
                <div className="pallete-section-colors-secondary-block-box-third-color"></div>
                <div className="pallete-section-colors-secondary-block-box-third-txt">
                  <span className="rgb-color-title">B3A07A</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 179</li>
                    <li className="rgb-colours-list__item">G 160</li>
                    <li className="rgb-colours-list__item">B 122</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-fourth colour-block">
                <div className="pallete-section-colors-secondary-block-box-fourth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-fourth-txt">
                  <span className="rgb-color-title">767072</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 118</li>
                    <li className="rgb-colours-list__item">G 112</li>
                    <li className="rgb-colours-list__item">B 114</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-fifth colour-block">
                <div className="pallete-section-colors-secondary-block-box-fifth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-fifth-txt">
                  <span className="rgb-color-title">B1A59E</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 177</li>
                    <li className="rgb-colours-list__item">G 165</li>
                    <li className="rgb-colours-list__item">B 158</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-sixth colour-block">
                <div className="pallete-section-colors-secondary-block-box-sixth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-sixth-txt">
                  <span className="rgb-color-title">C1B191</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 193</li>
                    <li className="rgb-colours-list__item">G 177</li>
                    <li className="rgb-colours-list__item">B 145</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-seventh colour-block">
                <div className="pallete-section-colors-secondary-block-box-seventh-color"></div>
                <div className="pallete-section-colors-secondary-block-box-seventh-txt">
                  <span className="rgb-color-title">A8A7A7</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 168</li>
                    <li className="rgb-colours-list__item">G 167</li>
                    <li className="rgb-colours-list__item">B 167</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-eighth colour-block">
                <div className="pallete-section-colors-secondary-block-box-eighth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-eighth-txt">
                  <span className="rgb-color-title">D0C9C4</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 208</li>
                    <li className="rgb-colours-list__item">G 201</li>
                    <li className="rgb-colours-list__item">B 196</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-ninth colour-block">
                <div className="pallete-section-colors-secondary-block-box-ninth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-ninth-txt">
                  <span className="rgb-color-title">D0C5AB</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 208</li>
                    <li className="rgb-colours-list__item">G 197</li>
                    <li className="rgb-colours-list__item">B 171</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-tenth colour-block">
                <div className="pallete-section-colors-secondary-block-box-tenth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-tenth-txt">
                  <span className="rgb-color-title">F8F7F6</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 248</li>
                    <li className="rgb-colours-list__item">G 247</li>
                    <li className="rgb-colours-list__item">B 246</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-eleventh colour-block">
                <div className="pallete-section-colors-secondary-block-box-eleventh-color"></div>
                <div className="pallete-section-colors-secondary-block-box-eleventh-txt">
                  <span className="rgb-color-title">F3F1F0</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 243</li>
                    <li className="rgb-colours-list__item">G 241</li>
                    <li className="rgb-colours-list__item">B 240</li>
                  </ul>
                </div>
              </div>
              <div className="pallete-section-colors-secondary-block-box-twelfth colour-block">
                <div className="pallete-section-colors-secondary-block-box-twelfth-color"></div>
                <div className="pallete-section-colors-secondary-block-box-twelfth-txt">
                  <span className="rgb-color-title">E4DECC</span>
                  <ul className="rgb-colours-list">
                    <li className="rgb-colours-list__item">R 228</li>
                    <li className="rgb-colours-list__item">G 222</li>
                    <li className="rgb-colours-list__item">B 204</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadianCenter;
