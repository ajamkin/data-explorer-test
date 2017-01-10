import React, { Component } from 'react';
import { Link } from 'react-router';

class IndexTopic extends Component {
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
                  <form action="index-results.html" className="search-form header-search-form" style={{display: 'block'}}>
                    <input type="search" name="q" placeholder="Search for OECD data"
                           className="search-field livesearch"/>
                    <button type="submit" className="btn-search">
                      <i className="icon-ddp-search"></i>
                      <span className="accessible-hide">Search</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="container breadcrumbs">
            <ul>
              <li><Link to="/">OECD .Stat</Link></li>
              <li className="bd-01" style={{display: 'none'}}>Indicators</li>
              <li className="bd-02">Health</li>
            </ul>
          </div>

        </header>

        <main role="main">

          <div className="container">
            <div className="notifications panel panel-info">
              <div className="panel-heading">
                Settings have been carried over to customise your charts
                <button className="alert-btn unset-all">
                  Clear all
                </button>
                <button className="show-btn toggle-messages">
                  Show
                </button>
              </div>
              <div className="notifications-list panel-body">
                <div>
                  <div className="alert alert-info">
                    The following countries have been highlighted:
                    <ol className="setting-list">
                      <li className="setting-list-item" data-value="AUT">
                        <a href="">AUT</a>
                      </li>
                      <li className="setting-list-item" data-value="BRA">
                        <a href="">BRA</a>
                      </li>
                      <li className="setting-list-item" data-value="CHE">
                        <a href="">CHE</a>
                      </li>
                    </ol>
                    <button className="alert-btn unset">Clear setting</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="indicator-head line-top line-bottom">
              <h1>
                <i className="icon-ddp-health"></i> Health
              </h1>

            </div>

            <div className="row">
              <div className="col-3 indicator-group-navigation">
                <h2 className="line-top">Filter by topic</h2>
                <ul className="list-filters">
                  <li id="f/topics_en/health" data-type="Health" className="exa-category active"><a href="javascript:;"
                                                                                                    className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health </a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health expenditure and financing</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health Status</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Non-Medical Determinants of Health</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health Care Resources</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health Workforce Migration</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health Care Utilisation</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Health Care Quality Indicators</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Pharmaceutical Market</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Long-Term Care Resources and Utilisation</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Social Protection</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Demographic References</a></li>
                  <li className="exa-category subitem"><a href="" className="exa-add-category"><i
                    className="icon-ddp-health"></i> Economic References</a></li>
                </ul>
                <h2 className="line-top">Filter by type <a data-toggle="collapse" href="#collapseExample"
                                                           aria-expanded="false" aria-controls="collapseExample"><i
                  className="glyphicon glyphicon-chevron-down pull-right"></i></a></h2>
                <ul className="list-filters collapse in" id="collapseExample">
                  <li className="exa-category">
                    <a href="" className="exa-add-category"><i className="icon-ddp-indicator"></i> Indicators </a>
                  </li>
                  <li className="exa-category active">
                    <a href="" className="exa-add-category"><i className="icon-ddp-database"></i> Databases </a>
                  </li>
                  <li className="exa-category subitem active">
                    <a href="" className="exa-add-category"><i className="icon-ddp-database"></i> API Access </a>
                  </li>
                  <li className="exa-category">
                    <a href="" className="exa-add-category"><i className="icon-ddp-publication"></i> Publications </a>
                  </li>
                  <li className="exa-category subitem" style={{display: 'none'}}>
                    <a href="" className="exa-add-category"><i className="icon-ddp-undefined"></i> Issues </a>
                  </li>
                  <li className="exa-category subitem" style={{display: 'none'}}>
                    <a href="" className="exa-add-category"><i className="icon-ddp-undefined"></i> Books </a>
                  </li>
                  <li className="exa-category" style={{display: 'none'}}>
                    <a href="" className="exa-add-category"><i className="icon-ddp-countries"></i> Countries </a>
                  </li>
                  <li className="exa-category" style={{display: 'none'}}>
                    <a href="" className="exa-add-category"><i className="icon-ddp-science"></i> Topics </a>
                  </li>
                </ul>
                <h2 className="line-top">Filter by Country <a data-toggle="collapse" href="#collapseExample2"
                                                              aria-expanded="false" aria-controls="collapseExample"><i
                  className="glyphicon glyphicon-chevron-down pull-right"></i></a></h2>
                <div className="collapse" id="collapseExample2">
                  <ul className="location-list">
                    <li className="location-list-item is-group" data-id="OAVG">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">OAVG</span>
                        <span className="location-list-name">OECD - Average</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="AUS">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">AUS</span>
                        <span className="location-list-name">Australia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="AUT">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">AUT</span>
                        <span className="location-list-name">Austria</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="BEL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">BEL</span>
                        <span className="location-list-name">Belgium</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="BRA">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">BRA</span>
                        <span className="location-list-name">Brazil</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CAN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CAN</span>
                        <span className="location-list-name">Canada</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CHE">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CHE</span>
                        <span className="location-list-name">Switzerland</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CHL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CHL</span>
                        <span className="location-list-name">Chile</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CHN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CHN</span>
                        <span className="location-list-name">China (People's Republic of)</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="COL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">COL</span>
                        <span className="location-list-name">Colombia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CRI">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CRI</span>
                        <span className="location-list-name">Costa Rica</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="CZE">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">CZE</span>
                        <span className="location-list-name">Czech Republic</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="DEU">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">DEU</span>
                        <span className="location-list-name">Germany</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="DNK">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">DNK</span>
                        <span className="location-list-name">Denmark</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="ESP">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">ESP</span>
                        <span className="location-list-name">Spain</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="EST">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">EST</span>
                        <span className="location-list-name">Estonia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="FIN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">FIN</span>
                        <span className="location-list-name">Finland</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="FRA">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">FRA</span>
                        <span className="location-list-name">France</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="GBR">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">GBR</span>
                        <span className="location-list-name">United Kingdom</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="GRC">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">GRC</span>
                        <span className="location-list-name">Greece</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="HUN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">HUN</span>
                        <span className="location-list-name">Hungary</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="IDN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">IDN</span>
                        <span className="location-list-name">Indonesia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="IND">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">IND</span>
                        <span className="location-list-name">India</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="IRL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">IRL</span>
                        <span className="location-list-name">Ireland</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="ISL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">ISL</span>
                        <span className="location-list-name">Iceland</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="ISR">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">ISR</span>
                        <span className="location-list-name">Israel</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="ITA">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">ITA</span>
                        <span className="location-list-name">Italy</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="JPN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">JPN</span>
                        <span className="location-list-name">Japan</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="KOR">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">KOR</span>
                        <span className="location-list-name">Korea</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="LTU">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">LTU</span>
                        <span className="location-list-name">Lithuania</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="LUX">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">LUX</span>
                        <span className="location-list-name">Luxembourg</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="LVA">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">LVA</span>
                        <span className="location-list-name">Latvia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="MEX">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">MEX</span>
                        <span className="location-list-name">Mexico</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="NLD">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">NLD</span>
                        <span className="location-list-name">Netherlands</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="NOR">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">NOR</span>
                        <span className="location-list-name">Norway</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="NZL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">NZL</span>
                        <span className="location-list-name">New Zealand</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="POL">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">POL</span>
                        <span className="location-list-name">Poland</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="PRT">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">PRT</span>
                        <span className="location-list-name">Portugal</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="RUS">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">RUS</span>
                        <span className="location-list-name">Russia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="SVK">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">SVK</span>
                        <span className="location-list-name">Slovak Republic</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="SVN">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">SVN</span>
                        <span className="location-list-name">Slovenia</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="SWE">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">SWE</span>
                        <span className="location-list-name">Sweden</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="TUR">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">TUR</span>
                        <span className="location-list-name">Turkey</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="USA">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">USA</span>
                        <span className="location-list-name">United States</span>
                      </a>
                    </li>
                    <li className="location-list-item" data-id="ZAF">
                      <a href="http://data.oecd.org/healthres/health-spending.htm" className="location-list-link">
                        <span className="location-id location-list-id">ZAF</span>
                        <span className="location-list-name">South Africa</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <h2 className="line-top">Filter by Frequency <a data-toggle="collapse" href="#collapseExample3"
                                                                aria-expanded="false" aria-controls="collapseExample"><i
                  className="glyphicon glyphicon-chevron-down pull-right"></i></a></h2>
                <ul className="list-filters collapse segmented-control frequencies" id="collapseExample3">
                  <li className="current">
                    <a href="#" data-value="A" style={{fontSize:'14px !important'}}>yearly</a>
                  </li>
                  <li>
                    <a href="#" data-value="Q" className="disabled" style={{fontSize:'14px !important'}}>quarterly</a>
                  </li>
                  <li>
                    <a href="#" data-value="M" className="disabled" style={{fontSize:'14px !important'}}>monthly</a>
                  </li>
                </ul>
                <h2 className="line-top">Filter by Time Period <a data-toggle="collapse" href="#collapseExample4"
                                                                  aria-expanded="false" aria-controls="collapseExample"><i
                  className="glyphicon glyphicon-chevron-down pull-right"></i></a></h2>
                <div className="collapse" id="collapseExample4">
                  <div className="time-slider">
                    <div className="time-slider-inner noUi-target noUi-ltr noUi-horizontal noUi-background"
                         style={{display: 'block'}}>
                      <div className="noUi-base">
                        <div className="noUi-origin noUi-connect noUi-dragable noUi-stacking" style={{left:'98.1481%'}}>
                          <div className="noUi-handle noUi-handle-lower"></div>
                        </div>
                        <div className="noUi-origin noUi-background" style={{left:'98.1481%'}}>
                          <div className="noUi-handle noUi-handle-upper"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="time-period-navigation">
                    <div className="previous-time-period">
                      <a href=""><i className="icon-ddp-expand-left" title="Previous time period"></i></a>
                    </div>
                    <div className="next-time-period">
                      <a href=""><i className="icon-ddp-expand-right" title="Next time period"></i></a>
                    </div>
                    <div className="current-time-period">2013</div>
                  </div>
                </div>
                <h2 className="line-top">Sort results <a data-toggle="collapse" href="#collapseExample5"
                                                         aria-expanded="false" aria-controls="collapseExample"><i
                  className="glyphicon glyphicon-chevron-down pull-right"></i></a></h2>
                <ul className="list-filters collapse" id="collapseExample5">
                  <li id="score" className="selected"><a href="">Ready-made table</a></li>
                  <li id="desc(document_publicationdate)" className=""><a href="">API access</a></li>
                  <li id="asc(title)" className=""><a href="">Archived data</a></li>
                </ul>
              </div>

              <div className="col-9">
                <h2 id="" className="line-top">
                  <i className="icon-ddp-search"></i>Showing 5435 results<span className="filtered-for-intro"> filtered for </span><span
                  className="filtered-for-filters">Health</span>
                </h2>
                <p>
                  A full text search is done on dataset names, dimension members and metadata. The results are not the
                  variables themselves but rather a list of datasets where the search terms exist, and a query for each
                  dataset is proposed, taking the search terms into account.
                </p>
                <table className="table-items">
                  <tbody id="" style={{display: 'table-row-group', opacity: '1'}}>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Health Status: EN - Health Status Query1</span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health Status</a></span>
                      <span className="item-description pull-right">Last updated: 09/13/2013 09:01:23</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Health Status: EN - Query2 </span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health Workforce Migration</a></span>
                      <span className="item-description pull-right">Last updated: 09/13/2013 09:01:23</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Test Health Care Resources: Test Health Care Resources</span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health Workforce Migration</a></span>
                      <span className="item-description pull-right">Last updated: 01/11/2016 12:13:36</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Health Care Resources: Health care resources </span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health Status</a></span>
                      <span className="item-description pull-right">Last updated: 01/29/2014 15:40:04</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Health Care Resources: Medical technology copy</span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health Status</a></span>
                      <span className="item-description pull-right">Last updated: 01/29/2014 15:40:04</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Creditor Reporting System (CRS): tomi test</span></a>
                      <p className="item-description">The objective of the CRS Aid Activity database is to provide a set
                        of readily available basic data that enables analysis on where aid goes, what</p>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Social Protection</a></span>
                      <span className="item-description pull-right">Last updated: 07/03/2015 14:05:47</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Country statistical profiles on line: CSP-TEST-OnLine</span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Demographic References</a></span>
                      <span className="item-description pull-right">Last updated: 10/16/2015 13:45:37</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Creditor Reporting System (CRS): tomi test copy</span></a>
                      <p className="item-description">The objective of the CRS Aid Activity database is to provide a set
                        of readily available basic data that enables analysis on where aid goes, what</p>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Demographic References</a></span>
                      <span className="item-description pull-right">Last updated: 07/03/2015 14:05:47</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Quarterly National Accounts real: EN-public-QNA - 300000</span></a>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Social Protection</a></span>
                      <span className="item-description pull-right">Last updated: 05/19/2016 12:28:23</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> Government at a Glance - 2011 edition: gov2011</span></a>
                      <p className="item-description">Government at a Glance provides a dashboard of indicators
                        assembled to help decision makers and the public analyse and benchmark governments across</p>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Pharmaceutical Market</a></span>
                      <span className="item-description pull-right">Last updated: 11/07/2014 10:17:24</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> SDBS Structural Business Statistics: SDBS Structural Business Statitistics</span></a>
                      <p className="item-description">The SSIS (Structural Statistics for Industry and Services)
                        database, provides comparable information by detailed industrial sector (up to 4-digit</p>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Pharmaceutical Market</a></span>
                      <span className="item-description pull-right">Last updated: 07/26/2011 14:30:48</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="item" colSpan="3">
                      <a href="dataset.html"><span className="item-title"><i className="icon-ddp-publication"></i> SDBS Structural Business Statistics: All Businesses (SSIS) </span></a>
                      <p className="item-description">The SSIS (Structural Statistics for Industry and Services)
                        database, provides comparable information by detailed industrial sector (up to 4-digit</p>
                      <span className="item-description pull-left"><span className="item-type">dataset</span> in <a
                        href="">Health expenditure and financing</a></span>
                      <span className="item-description pull-right">Last updated: 07/26/2011 14:30:48</span>
                    </td>
                  </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default IndexTopic;
