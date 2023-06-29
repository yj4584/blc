import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleSolid } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Main() {
  const [currentBanner, setCurrentBanner] = useState(1);
  const [isFadeIn, setIsFadeIn] = useState(true);
  return (
    <section className="main-section">
      <div
        className={`main-banner banner${currentBanner} ${
          isFadeIn ? "opacity-1" : "opacity-0"
        }`}
      >
        {currentBanner == 1 && (
          <div className="banner-text">
            <span>0{currentBanner}</span> 합성목재 데크&클립
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;휀스&브라켓
          </div>
        )}
        {currentBanner == 2 && (
          <div className="banner-text">
            <span>0{currentBanner}</span> 목조주택 건축용
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연결철물&주춧돌
          </div>
        )}
        {currentBanner == 3 && (
          <div className="banner-text">
            <span>0{currentBanner}</span> 공장 및 목재창고
          </div>
        )}

        <div
          className="prev-btn"
          onClick={() => {
            setIsFadeIn(false);
            setIsFadeIn(true);
            if (currentBanner == 1) {
              setCurrentBanner(3);
            } else {
              setCurrentBanner(currentBanner - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          className="next-btn"
          onClick={() => {
            setIsFadeIn(false);
            setIsFadeIn(true);
            if (currentBanner == 3) {
              setCurrentBanner(1);
            } else {
              setCurrentBanner(currentBanner + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className="banner-nav">
          <div className="nav-btn active">
            {currentBanner == 1 ? (
              <FontAwesomeIcon icon={faCircleSolid} />
            ) : (
              <FontAwesomeIcon icon={faCircleRegular} />
            )}
          </div>
          <div className="nav-btn inactive">
            {currentBanner == 2 ? (
              <FontAwesomeIcon icon={faCircleSolid} />
            ) : (
              <FontAwesomeIcon icon={faCircleRegular} />
            )}
          </div>
          <div className="nav-btn inactive">
            {currentBanner == 3 ? (
              <FontAwesomeIcon icon={faCircleSolid} />
            ) : (
              <FontAwesomeIcon icon={faCircleRegular} />
            )}
          </div>
        </div>
      </div>
      {/* <div className="intro">introduction</div> */}
      <div className="products">
        <p className="sub-title-2">제품</p>
        <div className="menus">
          <div className="menu-wrap">
            <NavLink to="/wood">
              <div className="menu-circle deck">합성목재</div>
            </NavLink>
          </div>
          <div className="menu-wrap">
            <NavLink to="/steelwork">
              <div className="menu-circle steelwork">연결철물</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="certificates">
        <div className="sub-title">인증서</div>
      </div>
    </section>
  );
}
