import { fenceCap } from "../data/fenceCap";

export function Fence() {
    return (
      <section className="fence-section">
        <div className="title-area"><p className="title">합성목재</p></div>
        <div className="sub-title">휀스&브라켓</div>
        <div className="image"></div>
        <p>비엘텍크라스노의 휀스 제품을 소개합니다.</p>
        <div className="sub-title">휀스 소재</div>
        <div className="image-area image1"></div>
        <div className="image-area image2"></div>
        <div className="image-area image3"></div>
        <div className="sub-title">연결 클립</div>
        <div className="info-area">
          {
            fenceCap.map((item, index)=>{
              return <div className="item" key={index}>
              <p className="item-title">{item.name}</p>
              <div className="item-image" style={{
                      backgroundImage: item.image
                    }}></div>
              <div className="item-image" style={{
                      backgroundImage: item.draft
                    }}></div>
            </div>
            })
          }
        </div>
      </section>
    );
  }
  