const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">Neden Fahax?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>01</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Çoklu Market</h3>
                  <p className="fn_desc fn_animated_text">
                    Uygulamamızda yer alan çoklu marketler sayesinde farklı
                    piyasalardaki fiyat farklarını görebilirsiniz. Ayrıca tüm
                    verileri gecikmesiz ve ücretsiz bir şekilde
                    görüntüleyebilirsiniz.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>02</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Kullanıcı Dostu</h3>
                  <p className="fn_desc fn_animated_text">
                    Kullanıcı dostu arayüzümüz sayesinde uygulamayı kolayca
                    kullanabilirsiniz. X uygulamada aradığınızı bulmakta
                    zorlanıyorsanız Fintorly tam size göre!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>03</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Gecikmesiz Veri</h3>
                  <p className="fn_desc fn_animated_text">
                    Uygulamamızda yer alan verileri gecikmesiz bir şekilde
                    görüntüleyebilirsiniz. Profesyonel ekibimiz sayesinde
                    sizlere en iyi hizmeti sunmak için ekibimiz çalışıyor.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>04</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Ücretsiz</h3>
                  <p className="fn_desc fn_animated_text">
                    Uygulamamızı kullanmak için hiçbir ücret ödemek zorunda
                    değilsiniz. Uygulamamızı kullanmak için sadece bir hesap
                    oluşturmanız yeterlidir. Keyfinize bakabilirsiniz
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
