const Footer = () => {
  return (
    <footer id="footer">
      <div className="neoh_fn_footer">
        {/* Footer Top */}
        <div className="footer_top">
          <div className="container">
            <div className="ft_in">
              <div className="desc">
                <div className="img">
                  <img src="img/footer-logo.png" alt=""  style={{
                    width: '6vw',
                    height: '6vw'
                  }} />
                </div>
                <h3 className="fn_title">Erken erişim için bize ulaşın!</h3>
                <p className="fn_desc">
                  Sizde Fintorly'nin özelliklerinden faydalanmak ve ilk
                  kullanıcılardan birisi olmak istiyorsanız, bize
                  ulaşabilirsiniz.
                </p>
              </div>
              <div className="subscribe_form">
                <div className="subscribe_in">
                  <input type="text" placeholder="Email..." />
                  <a href="#" className="neoh_fn_button only_text">
                    <span className="text">Gönder</span>
                  </a>
                </div>
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                  data-message="You have subscribed to our updates. Thank you"
                  data-invalid-email="Please enter valid email!"
                />
                <div className="empty_notice">
                  <span>Lütfen mail adresinizi giriniz</span>
                </div>
              </div>
              <div className="neoh_fn_social_list">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/Fintorly"
                      target={"_blank"}
                    >
                      <i className="fn-icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Top */}
        {/* Footer Bottom */}
        <div className="footer_bottom">
          <div className="container">
            <div className="fb_in">
              <div className="fb_left">
                <p>
                  Copyright {new Date().getFullYear()} - Designed &amp;
                  Developed by{" "}
                  <a
                    href="https://www.fahasoftware.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FahaSoftware
                  </a>
                </p>
              </div>
              <div className="fb_right">
                <ul>
                  {/* <li>
                    <Link href="/roadmap">RoadMap</Link>
                  </li> */}
                  {/* <li>
                    <a href="#">Cookies</a>
                  </li> */}
                  <li>
                    <a href="#">Gizlilik &amp; Güvenlik</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* !Footer Bottom */}
      </div>
    </footer>
  );
};
export default Footer;
