import Link from "next/link";
import Layout from "../src/layout/Layout";

const BlogSingle = () => {
  return (
    <Layout pageName={"Blog Single"}>
      <div className="neoh_fn_blog_single neoh_fn_single">
        {/* Single Background */}
        <div className="single_bg" />
        {/* !Single Background */}
        {/* Single Content */}
        <div className="single_content">
          <div className="container" id="blog-single-content">
            <div className="neoh_fn_share">
              <h5 className="label">Share:</h5>
              <ul>
                <li>
                  <a href="#">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="neoh_fn_breadcrumbs">
              <p>
                <Link href="/">Home</Link>
                <span className="separator">/</span>
                <Link href="/blog">Blog</Link>
                <span className="separator">/</span>
                <span className="current">Başlık</span>
              </p>
            </div>
            <div className="single_img">
              <img src="img/blog/single.jpg" alt="" />
            </div>
            {/* Page With Sidebar */}
            <div className="neoh_fn_wsidebar">
              {/* Left Sidebar */}
              <div className="sidebar_left">
                {/* Mini Items  */}
                <div className="neoh_fn_minis">
                  <div className="m_item">
                    <a href="#">23 Eylül 2022</a>
                  </div>
                  <div className="m_item">
                    <span>
                      By <a href="#">Fahax</a>
                    </span>
                  </div>
                </div>
                {/* !Mini Items  */}
                {/* Single Title */}
                <div className="single_title">
                  <h2 className="fn_title">
                    Neoh’s NFT Goes Public In Nod To Crypto Adoption
                  </h2>
                  <div className="categories">
                    <a href="#">Tokens</a>, <a href="#">NFTs</a>,{" "}
                    <a href="#">Crypto</a>
                  </div>
                </div>
                {/* !Single Title */}
                {/* Single Description */}
                <div className="single_desc">
                  <p>
                    Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                    tincidunt purus nec enim tincidunt, sit amet facilisis massa
                    laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                    dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                    nisi augue, a gravida turpis elementum vel. Curabitur
                    sagittis quis diam et rhoncus. Nam pellentesque imperdiet
                    aliquet. Sed non ante malesuada, ultrices sem at, tempus
                    libero.
                  </p>
                  <p>
                    Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                    orci, eleifend euismod justo. Quisque luctus turpis eu
                    tristique feugiat. Praesent ac magna feugiat, interdum lacus
                    ac, interdum dui. Pellentesque id quam quis enim malesuada
                    rutrum. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nulla vel neque
                    et ex vestibulum elementum at sed lacus. Fusce imperdiet
                    mauris ac mi viverra viverra. Maecenas pharetra nibh non
                    arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl
                    id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut
                    lacus sed rutrum.
                  </p>
                  <p>
                    Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                    orci, eleifend euismod justo. Quisque luctus turpis eu
                    tristique feugiat. Praesent ac magna feugiat, interdum lacus
                    ac, interdum dui. Pellentesque id quam quis enim malesuada
                    rutrum. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nulla vel neque
                    et ex vestibulum elementum at sed lacus. Fusce imperdiet
                    mauris ac mi viverra viverra. Maecenas pharetra nibh non
                    arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl
                    id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut
                    lacus sed rutrum.
                  </p>
                  <p>
                    Suspendisse dignissim ultricies iaculis. Suspendisse
                    ultrices turpis mi, non tincidunt orci interdum tempor.
                    Praesent venenatis, lorem egestas consequat tempor, nunc
                    neque venenatis risus, vitae interdum ipsum ipsum eget
                    purus. Proin ac leo non est imperdiet commodo. Donec dictum
                    augue ut odio feugiat vulputate. Pellentesque ultricies
                    augue in posuere ornare. Pellentesque pretium non nunc ac
                    sodales.
                  </p>
                  <p>
                    Nam et malesuada ante, in convallis libero. Aenean
                    sollicitudin egestas ante, eget porttitor leo fringilla sit
                    amet. Nam cursus neque ligula, in egestas elit porttitor
                    vel. Vestibulum ultricies tempus orci a auctor. Curabitur
                    sed pretium lacus, eget cursus dui. Aliquam at ex sit amet
                    urna interdum dignissim vel non dolor. Pellentesque mi nibh,
                    sollicitudin at neque id, tincidunt molestie lorem. Nulla
                    facilisi. Phasellus viverra mi ut sapien efficitur, sit amet
                    suscipit lorem commodo. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
                {/* !Single Description */}
                {/* Author Information Box */}
                <div className="neoh_fn_author_info">
                  <div className="info_img">
                    <img src="img/blog/author.jpg" alt="" />
                  </div>
                  <div className="info_desc">
                    <h3 className="fn_title">Josephine Sanchez</h3>
                    <p className="fn_desc">
                      Josephine is a writer, editor, etc.-er who muses about
                      life, design and travel for friendship, food, fun and
                      more.
                    </p>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="fn-icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* !Author Information Box */}
                {/* Tags */}
                <div className="neoh_fn_tags">
                  <h4 className="label">Tags:</h4>
                  <a href="#">Tokens</a>
                  <span>,</span>
                  <a href="#">NFT</a>
                  <span>,</span>
                  <a href="#">Featured</a>
                  <span>,</span>
                  <a href="#">Insights</a>
                </div>
                {/* !Tags */}
              </div>
              {/* !Left Sidebar */}
              {/* Right Sidebar */}
              <div className="sidebar_right">
                {/* Widget (about) */}
                <div className="widget">
                  <div className="neoh_fn_widget_about">
                    <div className="about_img">
                      <div className="img_inner">
                        <img src="img/thumbs/1-1.jpg" alt="" />
                        <div
                          className="abs_img"
                          data-bg-img="img/widgets/about.jpg"
                        />
                      </div>
                    </div>
                    <div className="afwa_title">
                      <h3>Maria Blonde</h3>
                      <p>
                        <a href="mailto:mariablonde@gmail.com">
                          mariablonde@gmail.com
                        </a>
                      </p>
                    </div>
                    <div className="afwa_desc">
                      <p>
                        I want your outer personal style to reflect the inner
                        you. I understand the importance of creating an interior
                        that gives a sense of solace
                      </p>
                    </div>
                    <div className="afwa_signature">
                      <img src="img/widgets/about-sign.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* !Widget (about) */}
                {/* Widget (social) */}
                <div className="widget widget-social">
                  <div className="wid-title">
                    <span className="text">Subscribe &amp; Follow</span>
                    <span className="icon" />
                  </div>
                  <div className="neoh_fn_widget_social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fn-icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-youtube-play" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-soundcloud" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fn-icon-vkontakte" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* !Widget (social) */}
                {/* Widget (Banner) */}
                <div className="widget widget-banner">
                  <img src="img/widgets/banner.jpg" alt="" />
                </div>
                {/* !Widget (Banner) */}
                {/* Widget (Subscribe) */}
                <div className="widget widget-subscribe">
                  <div className="neoh_fn_widget_subscribe">
                    <div className="desc">
                      <img src="svg/email.svg" alt="" className="fn__svg" />
                      <h3 className="fn_title">Newsletter</h3>
                      <p className="fn_desc">
                        Get to know about the latest trends, the best in crypto.
                      </p>
                    </div>
                    <div className="form">
                      <input type="text" placeholder="Email Address" />
                      <a href="#" className="neoh_fn_button only_text">
                        <span className="text">Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* !Widget (Subscribe) */}
              </div>
              {/* !Right Sidebar */}
            </div>
            {/* !Page With Sidebar */}
          </div>
          {/* Previous & Next Box */}

          {/* !Previous & Next Box */}
        </div>
        {/* !Single Content */}
      </div>
    </Layout>
  );
};
export default BlogSingle;
