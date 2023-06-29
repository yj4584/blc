import { steelWork } from "../data/steelwork";

export function Steelwork() {
    return (
      <section className="steelwork-section">
        <div className="title-area"><p className="title">연결철물&주춧돌</p></div>
        <div className="sub-title">연결철물</div>
        <div className="info-area">
          {
            steelWork.map((item, index)=>{
              return <div className="item" key={index}>
              <p className="item-title">{item.name}</p>
              <div className="item-image" style={{
                      backgroundImage: item.image
                    }}></div>
                    <div className="item-image" style={{
                      backgroundImage: item.fullImage
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
  