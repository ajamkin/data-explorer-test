import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="oecd-footer">
        <div className="oecd-institutional-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-3 col-sm-6 oecd-institutional-footer__name">
                <a href="http://data.oecd.org/">Data</a>
              </div>
              <div className="col-xs-3 col-sm-2">
                <a href="http://data.oecd.org/searchresults/?r=+f/type/indicators" className="oecd-institutional-footer__link">Catalogue of OECD Indicators</a>
              </div>
              <div className="col-xs-3 col-sm-2">
                <a href="http://www.oecdbetterlifeindex.org/" className="oecd-institutional-footer__link">Better Life Index</a>
              </div>
              <div className="col-xs-3 col-sm-2">
                <a href="http://www.oecd.org/contact/" className="oecd-institutional-footer__link">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="oecd-shared-footer oecd-shared-footer--light">
          <div className="container">
            <div className="row">
              <div className="col-xs-7 col-sm-5 oecd-shared-footer__logo-and-copyright">
                <div className="oecd-shared-footer__logo"></div>
                <div className="oecd-shared-footer__copyright">
            <span className="oecd-shared-footer__copyright-first">
              © 2016              
              Organisation for Economic
            </span>
                  <span className="oecd-shared-footer__copyright-second">            
              Co-operation and Development
            </span>
                </div>
              </div>
              <div className="col-xs-5 col-sm-3 oecd-shared-footer__terms">
                <ul className="oecd-shared-footer__links">
                  <li className="oecd-shared-footer__link-item">
                    <a href="http://www.oecd.org/termsandconditions/" className="oecd-shared-footer__link">Terms &amp; Conditions</a></li>
                  <li className="oecd-shared-footer__link-item">
                    <a href="http://www.oecd.org/privacy/" className="oecd-shared-footer__link">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 oecd-shared-footer__social-media">
                <p><a href="http://www.oecd.org/social-media/">Follow us (More platforms):</a></p>
                <ul className="oecd-shared-footer__icons">
                  <li className="oecd-shared-footer__icon">
                    <a href="http://www.facebook.com/theOECD" className="oecd-shared-footer__icon-link oecd-shared-footer__facebook">Facebook</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="http://twitter.com/oecd" className="oecd-shared-footer__icon-link oecd-shared-footer__twitter">Twitter</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="http://www.youtube.com/oecd" className="oecd-shared-footer__icon-link oecd-shared-footer__youtube">YouTube</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="https://www.linkedin.com/company/organisation-eco-cooperation-development-organisation-cooperation-developpement-eco" className="oecd-shared-footer__icon-link oecd-shared-footer__linkedin">LinkedIn</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="https://www.flickr.com/photos/oecd" className="oecd-shared-footer__icon-link oecd-shared-footer__flickr">Flickr</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="http://oecd.org/rssfeeds/" className="oecd-shared-footer__icon-link oecd-shared-footer__rss">RSS</a>
                  </li>
                  <li className="oecd-shared-footer__icon">
                    <a href="http://www.oecd.org/about/publishing/oecddirect.htm" className="oecd-shared-footer__icon-link oecd-shared-footer__oecddirect">Oecd Direct</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
