import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {
  render() {
    return (
      <div className="ddp-root">
        <header>
          <div className="header-statistics">
            <div className="container">
              <div className="header-statistics-inner">
                <div className="left">
                  <div className="logo"></div>
                  <h1 className="site-title">
                    <Link to="/" className="home-link">.Stat</Link>
                  </h1>
                  <div className="toggle-search-form">
                    <i className="icon-ddp-search"></i>
                  </div>
                  <div className="language-switch language-switch-left">
                    <a href="">› </a><a href="">Français</a>
                  </div>
                </div>
                <div className="right">
                  <div className="language-switch language-switch-right">
                    <a href="">› </a><a href="">Français</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container breadcrumbs">
            <ul>
              <li><Link to="/">OECD .Stat</Link></li>
              <li className="bd-01" style={{display: 'none'}}>Indicators</li>
            </ul>
          </div>
        </header>
        <main role="main">
          <div className="container">
            <div className="indicator-head line-top">
              <h1>
                Welcome to OECD.Stat
              </h1>
              <p>
                OECD.Stat includes data and metadata for OECD countries and selected non-member economies.
              </p>
            </div>
            <div className="home-jumbotron">
              <div className="row home-jumbotron-row">
                <div className="col-12">
                  <p>
                    <span
                      className="line">Access the data by using the search function or by selecting a main topic.</span>
                  </p>
                </div>
              </div>
              <div className="row home-jumbotron-row">
                <div className="col-7">
                  <form action="index-results.html" className="home-jumbotron-search-form">
                    <div className="home-jumbotron-search-item">
                      <label htmlFor="livesearch" className="home-jumbotron-search-label">
                        Search
                      </label>
                    </div>
                    <div className="home-jumbotron-search-item">
                      <input name="" type="search" placeholder="Search for OECD data"
                             className="home-jumbotron-search-field livesearch" id="livesearch"/>
                    </div>
                    <div className="home-jumbotron-search-item">
                      <button type="submit" className="home-jumbotron-btn-search">
                        <i className="icon-ddp-search"></i>
                        <span className="accessible-hide">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-4 col-offset-1">
                  <ul className="home-jumbotron-links">
                    <li className="home-jumbotron-search-tips">
                      <div className="info-tooltip" tabIndex="0">
                        <p>
                          <i className="icon-ddp-info"></i> Search tips
                        </p>
                        <p className="info-tooltip-content">
                          Start with keyword using the search bar (e.g. GDP, FDI, Health, unemployment, income
                          distribution, population, labour, education, trade, finance, prices, Economic Outlook,
                          Government Debt, Social expenditure ...)
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="line-top">Filter by topic</h2>
            <div className="main-topics">
              <div className="row">
                <div className="col-sm-4">
                  <Link to="topic">
                    <i className="icon-ddp-agriculture"></i>
                    <span className="topic-name">Agriculture</span>
                    <small>Agricultural output, Agricultural policy, Fisheries, Sustainable agriculture</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-development"></i>
                    <span className="topic-name">Development</span>
                    <small>Development resource flows, Official development assistance (ODA)</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-economics"></i>
                    <span className="topic-name">Economy</span>
                    <small>Corporate sector, Domestic product, Foreign direct investment (FDI), Household accounts,
                      International trade, Leading indicators, National income, Prices, Productivity
                    </small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-education"></i>
                    <span className="topic-name">Education</span>
                    <small>Education attainment, Education resources, International student assessment (PISA), Youth and
                      the labour market
                    </small>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link to="topic">
                    <i className="icon-ddp-energy"></i>
                    <span className="topic-name">Energy</span>
                    <small>Energy, Transport</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-environment"></i>
                    <span className="topic-name">Environment</span>
                    <small>Air and climate, Forest, Waste, Water</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-finance"></i>
                    <span className="topic-name">Finance</span>
                    <small>Conversion rates, Insurance, Interest rates, Monetary aggregates, Pensions</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-government"></i>
                    <span className="topic-name">Government</span>
                    <small>General government, Tax</small>
                  </Link>
                </div>
                <div className="col-sm-4">
                  <Link to="topic">
                    <i className="icon-ddp-health"></i>
                    <span className="topic-name">Health</span>
                    <small>Health care use, Health equipment, Health resources, Health risks, Health status</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-science"></i>
                    <span className="topic-name">Innovation and Technology</span>
                    <small>Broadband access, Entrepreneurship, Industry, Information and communication technology (ICT),
                      Research and development (R&amp;D)
                    </small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-jobs"></i>
                    <span className="topic-name">Jobs</span>
                    <small>Earnings and wages, Employment, Unemployment</small>
                  </Link>
                  <Link to="topic">
                    <i className="icon-ddp-society"></i>
                    <span className="topic-name">Society</span>
                    <small>Demography, Inequality, Migration, Population by region, Social protection</small>
                  </Link>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </main>
      </div>
    )
  }
}

export default LandingPage;
