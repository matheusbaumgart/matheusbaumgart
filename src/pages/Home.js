import React, { Component } from "react";

import { Link } from "react-router-dom";

import data from "../utils/data";

export default class Home extends Component {
  render() {
    return (
      <div className="main-col">
        <h3 style={{ margin: 0 }}>Who am I? </h3>
        <span style={{ opacity: 0.4, fontSize: 15 }}>
          (Not Jean Valjean, sorry)
        </span>
        <p>
          I'm <strong>Matt</strong>! An user-centered, quality-focused{" "}
          <strong>Product Designer</strong>.
          <br />I understand and define problems - I identify patterns and
          design elegant and delightful products.
        </p>

        <br />

        <h4>
          I'm specialised in <span className="text-bolder">designing</span> and{" "}
          <span className="text-bolder">building</span>
        </h4>
        <ul className="list-special">
          <li>User Experiences</li>
          <li>User Interfaces</li>
          <li>Design Systems</li>
          <li>Marketing Websites</li>
        </ul>

        <p>
          Through a dynamic and flexible process including Research, Prototypes
          and Usability Tests, amongst others, I create
          solutions to improve people's lives, delivering a product
          people love and use.
        </p>

        <br />

        <h4>Latest work</h4>

        {Object.keys(data.works).map(item => {
          let work = data.works[item];
          let workImage = work.image;
          let workImageBack = work.imageBack;

          return (
            <div key={work.id} className="work-item">
              <figure className="animate-image">
                <img
                  src={workImage}
                  // onMouseOver={e => (e.currentTarget.src = workImageBack)}
                  // onMouseOut={e => (e.currentTarget.src = workImage)}
                  alt={"work " + work.title}
                />
                <figcaption>
                  <h3>{work.title}</h3>
                  <h4>{work.description}</h4>
                  <span className="portfolio-button" to={"/work/" + work.id}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDE5SDVWNWg3VjNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0ydi03aC0ydjd6TTE0IDN2MmgzLjU5bC05LjgzIDkuODMgMS40MSAxLjQxTDE5IDYuNDFWMTBoMlYzaC03eiIvPjwvc3ZnPg=="></img></span>
                </figcaption>
                <Link to={"/work/" + work.id} />
              </figure>
              <p className="work-subtitle">
                <span className="text-500 color-333">{work.title}</span> —{" "}
                {work.role}
              </p>
            </div>
          );
        })}

        <p className="margin-bottom-sm">Want to have a chat? Drop me a line:</p>
        <a className="link-underline" href="mailto:hello@matheusbaumgart.com">
          hello@matheusbaumgart.com
        </a>
      </div>
    );
  }
}
