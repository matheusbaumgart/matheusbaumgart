import React, { Component } from "react";

import { Link } from "react-router-dom";

import data from "../utils/data";

export default class Home extends Component {
  render() {
    return (
      <div className="main-col">
        <h3>Hey, there!</h3>
        <p>
          I’m a creative problem solver — <br />
          With 10+ years of experience designing and building digital products.
          <br />
          <br />
          Through design, I help companies produce better products for their
          customers.
        </p>

        <br />

        <h4>
          I <span className="text-bolder">design</span> and{" "}
          <span className="text-bolder">build</span>
        </h4>
        <ul className="list-special">
          <li>User Experiences</li>
          <li>User Interfaces</li>
          <li>Marketing Websites</li>
          <li>Landing Pages</li>
        </ul>

        <br />

        <h4>Latest work</h4>

        {Object.keys(data.works).map(item => {
          let work = data.works[item];
          let workImage = work.image;

          return (
            <div key={work.id} className="work-item">
              <figure className="animate-image">
                <img src={workImage} alt={"work " + work.title} />
                <figcaption>
                  <h3>{work.title}</h3>
                  <h4>{work.description}</h4>
                </figcaption>
                {/* <Link to={"/work/" + work.id} /> */}
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
