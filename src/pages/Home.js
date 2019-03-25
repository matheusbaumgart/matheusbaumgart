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
          I'm especialised in <span className="text-bolder">designing</span> and{" "}
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
          and Usability Tests, amongst others, I'm passionate about creating
          solutions to improve people's lives and work, delivering a product
          people love and being as productive as I can be.
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
