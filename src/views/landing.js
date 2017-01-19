import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Loader from 'react-loader';
import 'whatwg-fetch';
import { isEmpty } from 'lodash';

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    const icons = [
      'icon-ddp-agriculture', 'icon-ddp-development', 'icon-ddp-economics', 'icon-ddp-education',
      'icon-ddp-energy', 'icon-ddp-environment', 'icon-ddp-finance', 'icon-ddp-government',
      'icon-ddp-health', 'icon-ddp-science', 'icon-ddp-jobs', 'icon-ddp-society'
    ];

    const { posts } = this.props;

    if (isEmpty(posts)) {
      return <Loader loaded={false}/>
    }

    const displayPosts = [
      [...posts.slice(0, 4)],
      [...posts.slice(4, 8)],
      [...posts.slice(8, 12)]
    ];

    console.log(displayPosts);

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
                    <i className="icon-ddp-search"/>
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
              <li className="bd-01" style={{ display: 'none' }}>Indicators</li>
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
                        <i className="icon-ddp-search"/>
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
                          <i className="icon-ddp-info"/> Search tips
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
                {displayPosts.map((postGroup, grIdx) => (
                  <div className="col-sm-4" key={`group_${grIdx}`}>
                    {postGroup.map((item, idx) => (
                      <Link to="topic" key={item.id}>
                        <i className={icons[idx]}/>
                        <span className="topic-name">{item.title.substring(0, 10)}</span>
                        <small>{item.title}</small>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <br/>
          </div>
        </main>
      </div>
    )
  }
}

export default connect(state => ({
  posts: state.posts
}), actions)(LandingPage);
