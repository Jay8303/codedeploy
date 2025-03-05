import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const NewsFeed = () => {
  const [dropdownsVisible, setDropdownsVisible] = useState({
    entertainment: false,
    sports: false,
    spirituality: false,
    health: false,
    business: false,
    environment: false, 
  });

  // Toggle dropdown visibility for each category
  const toggleDropdown = (category) => {
    setDropdownsVisible({
      ...dropdownsVisible,
      [category]: !dropdownsVisible[category],
    });
  };

  return (
    <div className="container">
      {/* Top Header */}
      <div className="background-blur" />
      <header className="header">
        <div className="logo">NewsFeed</div>
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="navbar">
        <ul>
          {/* Entertainment Dropdown */}
          <li className={`dropdown ${dropdownsVisible.entertainment ? 'show' : ''}`}>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleDropdown('entertainment'); }}>
              Entertainment
              <span className="dropdown-arrow">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              {dropdownsVisible.entertainment && (
                <>
                  <li><a href="/">Movies</a></li>
                  <li><a href="/">Music</a></li>
                  <li><a href="/">TV Shows</a></li>
                  <li><a href="/">Games</a></li>
                </>
              )}
            </ul>
          </li>

          {/* Sports Dropdown */}
          <li className={`dropdown ${dropdownsVisible.sports ? 'show' : ''}`}>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleDropdown('sports'); }}>
              Sports
              <span className="dropdown-arrow">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              {dropdownsVisible.sports && (
                <>
                  <li><a href="/">Football</a></li>
                  <li><a href="/">Basketball</a></li>
                  <li><a href="/">Tennis</a></li>
                  <li><a href="/">Cricket</a></li>
                </>
              )}
            </ul>
          </li>

          {/* Health Dropdown */}
          <li className={`dropdown ${dropdownsVisible.health ? 'show' : ''}`}>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleDropdown('health'); }}>
              Health
              <span className="dropdown-arrow">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              {dropdownsVisible.health && (
                <>
                  <li><a href="/">Fitness</a></li>
                  <li><a href="/">Nutrition</a></li>
                  <li><a href="/">Mental Health</a></li>
                  <li><a href="/">Wellness</a></li>
                </>
              )}
            </ul>
          </li>

          {/* Business Dropdown */}
          <li className={`dropdown ${dropdownsVisible.business ? 'show' : ''}`}>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleDropdown('business'); }}>
              Business
              <span className="dropdown-arrow">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              {dropdownsVisible.business && (
                <>
                  <li><a href="/">Finance</a></li>
                  <li><a href="/">Investments</a></li>
                  <li><a href="/">Startups</a></li>
                  <li><a href="/">Corporate News</a></li>
                </>
              )}
            </ul>
          </li>

          {/* Environment Dropdown */}
          <li className={`dropdown ${dropdownsVisible.environment ? 'show' : ''}`}>
            <a href="/" onClick={(e) => { e.preventDefault(); toggleDropdown('environment'); }}>
              Environment
              <span className="dropdown-arrow">&#x25BC;</span>
            </a>
            <ul className="dropdown-menu">
              {dropdownsVisible.environment && (
                <>
                  <li><a href="/">Climate Change</a></li>
                  <li><a href="/">Wildlife</a></li>
                  <li><a href="/">Conservation</a></li>
                  <li><a href="/">Sustainability</a></li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </nav>

      {/* Display paragraphs side by side */}
      <h2>Environment</h2>
      <div className="paragraph-container">
        <p className="list">Deforestation driving negative human-elephant interactions in Western Ghats, says study<Link to="https://www.thehindu.com/sci-tech/energy-and-environment/deforestation-driving-negative-human-elephant-interactions-in-western-ghats-says-study/article68709331.ece" className="read-more"> Read the full story here</Link></p>
        <p className="list">UK's coal plant closure a milestone towards climate goals, Uniper CEO says<Link to="https://www.thehindu.com/sci-tech/energy-and-environment/uks-coal-plant-closure-a-milestone-towards-climate-goals-uniper-ceo-says/article68708755.ece" className="read-more"> Read the full story here</Link></p>
        <p className="list">Japan's beloved panda couple return home after heartfelt farewell<Link to="https://www.thehindu.com/sci-tech/energy-and-environment/japans-beloved-panda-couple-return-home-after-heartfelt-farewell/article68708666.ece" className="read-more"> Read the full story here</Link></p>
      </div>
      <div>
  <h2>Entertainment</h2>
  <div className="paragraph-container">
    <p className="list">Hollywood News Live Updates: Hailey Bieber stuns fans with surprising message amid scrutiny over hubby Justin's bond with Sean Diddy<Link to="https://www.hindustantimes.com/entertainment/hollywood/justin-biebers-wife-hailey-stuns-fans-amid-sean-diddy-controversy-101728393698447.html" className="read-more"> Read the full story here</Link></p>
    <p className="list">TV News Live Updates: Bigg Boss 18: Youtuber slams makers for getting ‘criminal’ Rajat Dalal<Link to="https://www.hindustantimes.com/entertainment/tv/bigg-boss-18-youtuber-slams-makers-for-getting-criminal-rajat-dalal-101728393538823.html" className="read-more"> Read the full story here</Link></p>
    <p className="list">Bollywood News Live Updates: Suhana Khan shares picture of ‘birthday girl’ Gauri Khan with fun caption directed to Shah Rukh Khan, Karan Johar<Link to="https://www.hindustantimes.com/entertainment/bollywood/suhana-khan-shares-picture-of-birthday-girl-gauri-khan-fun-caption-shah-rukh-khan-karan-johar-101728389777642.html" className="read-more"> Read the full story here</Link></p>
  </div>
</div>
    <h2>Sports</h2>
    <div className="paragraph-container">
      <p className="list">Sports News IND-W vs SL-W 2024, India vs Sri Lanka Women's T20 World Cup Match Today Live Telecast: When and where to watch India vs Sri Lanka women T20 World Cup 2024?<Link to="" className="read-more"> Read the full story here</Link></p>
      <p className="list">‘2016 T20 World Cup loss still hurts’: Mahmudullah announces retirement from T20I<Link to="" className="read-more"> Read the full story here</Link></p>
      <p className="list">India’s impressive bowling depth: batsmen bowl at nets ahead of Bangladesh game in Delhi<Link to="" className="read-more"> Read the full story here</Link></p>
    </div>
    <h2>Health</h2>
    <div className="paragraph-container">
    <p className="list">Good news for India’s healthcare system<Link to="https://indianexpress.com/article/opinion/columns/good-news-for-indias-healthcare-system-9304438/" className="read-more"> Read the full story here</Link></p>
    <p className="list">In Conversation: What makes a diet truly heart-healthy?<Link to="https://www.medicalnewstoday.com/articles/in-conversation-what-makes-a-diet-truly-heart-healthy#1" className="read-more"> Read the full story here</Link></p>
    <p className="list">studies unlock clues about dementia risk and brain health<Link to="https://www.medicalnewstoday.com/articles/type-2-diabetes-studies-healthy-lifestyle-dementia-risk-brain-aging" className="read-more"> Read the full story here</Link></p>
    </div>
    <h2>Business</h2>
    <div className="paragraph-container">
    <p className="list">Business News highlights Today October 7, 2024: RuPay and new runaway inaugurated in Maldives for transaction and connectivity ease <Link to="https://www.hindustantimes.com/business/amazon-india-head-to-replace-nestle-indias-chairman-and-md-after-his-retirement-next-year-101728291102329.html" className="read-more"> Read the full story here</Link></p>
    <p className="list">Business News LIVE Updates : DGCA advisory to airlines over potential risk from jammed rudder control <Link to="https://www.hindustantimes.com/business/dgca-advisory-to-airlines-over-potential-risk-from-jammed-rudder-control-101728295199687.html" className="read-more"> Read the full story here</Link></p>
    <p className="list">Business News LIVE Updates : Amazon India head to replace Nestle India's Chairman and MD after his retirement next year<Link to="https://www.hindustantimes.com/business/amazon-india-head-to-replace-nestle-indias-chairman-and-md-after-his-retirement-next-year-101728291102329.html" className="read-more"> Read the full story here</Link></p>
    </div>
    </div>
  );
};

export default NewsFeed;
