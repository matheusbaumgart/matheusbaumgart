import React, { Component } from "react";
import "./App.css";
import ScrollToTop from "./utils/scrollToTop";

import matheusBaumgartLogo from "./imgs/matheus-baumgart-font.svg";
import twitter from "./imgs/twitter-sign.svg";
import github from "./imgs/github-sign.svg";
import linkedin from "./imgs/linkedin-sign.svg";

import Home from "./pages/Home";
import Work from "./pages/Work";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <div className="container">
              <div className="sidebar">
                <div className="sidebar-container">
                  <Link to="/">
                    <img
                      className="matheus-baumgart"
                      src={matheusBaumgartLogo}
                      alt="Matheus Baumgart"
                    />
                  </Link>
                  <p>
                    Product, Design & Development - Experiencing it all is my
                    hobby.
                  </p>
                  <p>Multi-perspective is my superpower 🦄</p>
                  <div className="social-media-links">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      rel="author"
                      href="https://twitter.com/matheusbaumgart"
                    >
                      <img src={twitter} alt="Matheus Baumgart's Twitter" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      rel="author"
                      href="https://www.linkedin.com/in/matheusbaumgart/"
                    >
                      <img src={linkedin} alt="Matheus Baumgart's Linkedin" />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      rel="author"
                      href="https://github.com/matheusbaumgart"
                    >
                      <img src={github} alt="Matheus Baumgart's Github" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <Route exact path="/" component={Home} />
                <Route path="/work/:id" component={Work} />

                <footer className="padder-vertical">
                  © {new Date().getFullYear()} Matheus Baumgart. All the rights
                  reserved.
                  <p>
                    Social media icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/dave-gandy"
                      title="Dave Gandy"
                    >
                      Dave Gandy
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>{" "}
                    is licensed by{" "}
                    <a
                      href="http://creativecommons.org/licenses/by/3.0/"
                      title="Creative Commons BY 3.0"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      CC 3.0 BY
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
