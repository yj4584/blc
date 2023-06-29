import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleSolid} from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

export function Facility() {
  const [currentBanner, setCurrentBanner] = useState(1);
  const [isFadeIn, setIsFadeIn] = useState(true);
    return (
      <section className="facility-section">
        <div className="left-title">
          공장 및 목재창고
        </div>
        <div className={`main-banner banner${currentBanner} ${isFadeIn?'opacity-1':'opacity-0'}`}>
        <div className="prev-btn" onClick={()=>{
          setIsFadeIn(false);
          setIsFadeIn(true);
          if(currentBanner==1) {
            setCurrentBanner(3)
          }else{
            setCurrentBanner(currentBanner-1)
          }
        }}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="next-btn" onClick={()=>{
          setIsFadeIn(false);
          setIsFadeIn(true);
          if(currentBanner==3) {
            setCurrentBanner(1)
          }else{
            setCurrentBanner(currentBanner+1)
          }
        }}><FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="banner-nav">
          <div className="nav-btn active">{currentBanner==1?<FontAwesomeIcon icon={faCircleSolid}/>:<FontAwesomeIcon icon={faCircleRegular} />}</div>
          <div className="nav-btn inactive">{currentBanner==2?<FontAwesomeIcon icon={faCircleSolid} />:<FontAwesomeIcon icon={faCircleRegular} />}</div>
          <div className="nav-btn inactive">{currentBanner==3?<FontAwesomeIcon icon={faCircleSolid} />:<FontAwesomeIcon icon={faCircleRegular} />}</div>
        </div>
      </div>
      </section>
    );
  }
  