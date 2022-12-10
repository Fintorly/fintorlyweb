import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"Hakkımızda"}>
      <PageBanner pageName={"Hakkımızda"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/about/1.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Fintorly: Yeni Nesil Kripto</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Fintorly, yeni nesil kripto analiz ve portfolyo uygulamasıdır.
                    İlk hedefimiz kullanıcıya tek bir platformda aradığı her
                    şeyi sunabilmek. Amacımız size en iyi hizmeti sunmak ve
                    sizin için en iyi yatırımı yapmanızı sağlamaktır. .
                    Uygulamamızda bulunan analizler sayesinde kripto para
                    piyasasında en iyi yatırımı yapabilirsiniz
                  </p>
                  <p>Hemen tıklayarak indirebilirsiniz!</p>
                </div>
                <div className="buttons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img src="svg/appstore.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">App Store</span>
                  </a>
                  <a
                    href="#/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button"
                  >
                    <span className="icon">
                      <img
                        src="svg/googleplay.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </span>
                    <span className="text">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Şeffaflık</h3>
                    <p className="fn_desc fn_animated_text">
                      Ekibimiz ve ürünlerimiz hakkında her şeyi biliyorsunuz.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Deneyim</h3>
                    <p className="fn_desc fn_animated_text">
                      FahaSoftware olarak 10 yıllık deneyimimizle sizlere en iyi
                      hizmeti sunuyoruz.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Güvenlik</h3>
                    <p className="fn_desc fn_animated_text">
                      FahaSoftware olarak sizin verilerinizi en güvenli şekilde
                      saklıyoruz.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
            {/* About Item #2 */}
            {/* <div className="neoh_fn_about_item reverse">
              <div className="img_item">
                <img src="img/about/2.jpg" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Thousands of Users</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Simply holding a Neoh will give you access to seasonal
                    airdrops, merchandise, physical and digital artworks,
                    collectibles and more.
                  </p>
                  <p>
                    We understand the importance of the cross-over between these
                    worlds and we truly believe to bridge these two together.
                    Our goals will always be for the community - creating,
                    building and innovating together with the commmunity.
                  </p>
                </div>
                <div className="buttons">
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Join Community</span>
                  </a>
                </div>
              </div>
            </div> */}
            {/* !About Item #2 */}
          </div>
        </section>
        {/* !Information Section */}
        {/* Video Section */}
        <section id="video">
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
          {/* Video Shortcode */}
          <div className="neoh_fn_video">
            <div className="bg_overlay">
              <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
              <div className="bg_color" />
            </div>
            <div className="v_content">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/lvwZQTB4iv4?autoplay=1"
              >
                <img src="svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
          </div>
          {/* !Video Shortcode */}
        </section>
        {/* !Video Section */}
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <h3 className="fn_title">Ekibimiz</h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                FahaSoftware olarak sizlere en iyi hizmeti sunmak için çalışan
                ekibimizle sizlere en iyi hizmeti sunuyoruz.
              </p>
            </div>
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/1.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Serkan UZUN</h3>
                        <p className="fn_desc">CEO</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a
                            href="https://instagram.com/serkanzzun?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/4.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Mahsa SADEGHI</h3>
                        <p className="fn_desc">Manager</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a
                            href="https://instagram.com/m.sadeghi1616?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/2.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Antonio FERRARI</h3>
                        <p className="fn_desc">Social Media Director</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a
                            href="https://instagram.com/antonio.ferraria?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/3.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Emre TOKLU</h3>
                        <p className="fn_desc">Designer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                        <a
                            href="https://instagram.com/emre.tokluu?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/8.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Cansu KÜÇÜKAL</h3>
                        <p className="fn_desc">
                          Graphic Designer & NFT Creater
                        </p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                        <a
                            href="https://instagram.com/beryque?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/7.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Yunus ÖZDEMİR</h3>
                        <p className="fn_desc">Back-End Developer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                        <a
                            href="https://instagram.com/yunusozzdemirr?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/5.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Yusuf Efe AZAKLI</h3>
                        <p className="fn_desc">Back-End & Game Developer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                        <a
                            href="https://instagram.com/ysfee.azkl?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/6.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Furkan YILMAZ</h3>
                        <p className="fn_desc">Front-End Developer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                        <a
                            href="https://instagram.com/fuyk4n?igshid=NjZiMGI4OTY="
                            target={"_blank"}
                          >
                            <i className="fn-icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;
