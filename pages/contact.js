import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const Contact = () => {
  return (
    <Layout pageName={"İletişim"}>
      <PageBanner pageName={"İletişim"} />
      <div className="neoh_fn_contact_page">
        <div className="container">
          <div className="mw_500">
            <form
              action="/"
              method="post"
              className="contact_form"
              id="contact_form"
              autoComplete="off"
            >
              <div className="input_list">
                <ul>
                  <li>
                    <label htmlFor="name">Adınız</label>
                    <input id="name" type="text" placeholder="Furkan YILMAZ" />
                  </li>
                  <li>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      placeholder="info@fahax.com"
                    />
                  </li>
                  <li>
                    <label htmlFor="subject">Başlık</label>
                    <input id="subject" type="text" />
                  </li>
                  <li>
                    <label htmlFor="message">Mesajınız</label>
                    <textarea id="message" defaultValue={""} />
                  </li>
                  <li>
                    <a
                      id="send_message"
                      href="#"
                      className="neoh_fn_button only_text"
                    >
                      <span className="text">Gönder</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
              />
              <div className="empty_notice">
                <span>Lütfen tüm alanları doldurun.</span>
              </div>
            </form>
   
            <div className="info_list">
              <ul>
                <li>
                  <p className="label">Adresimiz</p>
                  <h3 className="value">Akat Mah. Meydan Sk. No:14 Edin Suner Plaza</h3>
                </li>
                <li>
                  <p className="label">Telefon Numarası</p>
                  <h3 className="value">
                    <a href="tel:+908505329181">+90 850 532 91 81</a>
                  </h3>
                </li>
                <li>
                  <a href="mailto:info@fahasoftware.com" className="email">
                    info@fahasoftware.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
