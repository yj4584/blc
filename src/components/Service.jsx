export function Service() {
    return (
      <section className="service-section">
        <div className="title-area"><p className="title">고객센터</p></div>
        <div className="title-1">Q&A</div>
        <table>
          <thead>
            <tr>
              <th className="col1">No</th>
              <th className="col2">카테고리</th>
              <th className="col3">제목</th>
              <th className="col4">글쓴이</th>
              <th className="col5">작성시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col1">1</td>
              <td className="col2">제품문의</td>
              <td className="col3">문의드립니다.</td>
              <td className="col4">홍길동</td>
              <td className="col5">2023-06-05</td>
            </tr>
          </tbody>
        </table>
        <div className="btn-wrap"><div className="write-btn">글쓰기</div></div>
      </section>
    );
  }
  