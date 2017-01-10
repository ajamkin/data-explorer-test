import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="oecd-header oecd-header--bg-light-blue oecd-header--primary-hidden">
        <nav className="container">
          <div className="row">
            <div className="col-sm-1 oecd-header__item oecd-header__logo-and-toggle">
              <div className="oecd-header__logo">
                <div className="sr-only">
                  Organisation for Economic Co-operation and Development (OECD)
                </div>
              </div>
              <button className="oecd-header__primary-toggle" title="Toggle Menu">
                <span className="oecd-header__menu-open"></span>
                <span className="oecd-header__menu-close">×</span>
                <span className="sr-only">Menu</span>
              </button>
            </div>
            <ul className="oecd-header__primary">
              <li className="col-sm-2 oecd-header__item">
                <a href="http://oecd.org/" className="oecd-header__link">OECD.org</a>
              </li>
              <li className="col-sm-2 oecd-header__item oecd-header__item--active">
                <strong className="oecd-header__current-page">Data</strong>
              </li>
              <li className="col-sm-2 oecd-header__item">
                <a href="http://www.oecd-ilibrary.org/" className="oecd-header__link">Publications</a>
              </li>
              <li className="col-sm-2 oecd-header__item oecd-header__secondary-container">
                <a href="http://data.oecd.org/healthres/health-spending.htm" className="oecd-header__link oecd-header__secondary-toggle">More sites</a>
                <ul className="sr-only oecd-header__secondary">
                  <li className="oecd-header__item oecd-header__secondary-item oecd-header__secondary-item-first">
                    <a href="http://www.oecdbetterlifeindex.org/" className="oecd-header__link oecd-header__secondary-link">OECD Better Life Index</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.oecd-ilibrary.org/" className="oecd-header__link oecd-header__secondary-link">OECD iLibrary</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.oecdobserver.org/" className="oecd-header__link oecd-header__secondary-link">OECD Observer</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://oecdinsights.org/" className="oecd-header__link oecd-header__secondary-link">OECD Insights blog</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.oecd.org/dev/" className="oecd-header__link oecd-header__secondary-link">OECD Development Centre</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.fatf-gafi.org/" className="oecd-header__link oecd-header__secondary-link">FATF - Financial Action Task Force</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.iea.org/" className="oecd-header__link oecd-header__secondary-link">IEA – International Energy Agency</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.itf-oecd.org/" className="oecd-header__link oecd-header__secondary-link">ITF – International Transport Forum</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item">
                    <a href="http://www.oecd-nea.org/" className="oecd-header__link oecd-header__secondary-link">NEA – Nuclear Energy Agency</a>
                  </li>
                  <li className="oecd-header__item oecd-header__secondary-item oecd-header__secondary-item-last">
                    <a href="http://www.oecd.org/swac/" className="oecd-header__link oecd-header__secondary-link">SWAC – Sahel and West Africa Club</a>
                  </li>
                </ul>
              </li>
              <li className="col-sm-1 oecd-header__item">
                <a href="http://oecd.org/newsroom/" className="oecd-header__link">News</a>
              </li>
              <li className="col-sm-2 oecd-header__item">
                <a href="http://oecd.org/careers/" className="oecd-header__link">Job vacancies</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
