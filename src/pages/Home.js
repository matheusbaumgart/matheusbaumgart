import React, { Component } from "react";

import { Link } from "react-router-dom";

import data from "../utils/data";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="padder">
          <h3 style={{ margin: 0, color: "#fff" }}>Hello!</h3>
          <p>
            I'm <span style={{ fontWeight: 500, color: "#fff" }}>Matt</span>, an
            user-centered quality-focused Product & Design leader, also an
            indie-hacker. <br />
            Head of UX & Design at{" "}
            <a
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://datch.io"
            >
              Datch
            </a>{" "}
            and Maker of{" "}
            <a
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://digitalagenda.app"
            >
              Today - Digital Agenda
            </a>{" "}
            and{" "}
            <a
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reapapp.io"
            >
              Reap
            </a>
          </p>

          {/* <h4>
          I'm specialised in <span className="text-bolder">designing</span> and{" "}
          <span className="text-bolder">building</span>
        </h4>
        <ul className="list-special">
          <li>User Experiences</li>
          <li>User Interfaces</li>
          <li>Design Systems</li>
          <li>Mobile Apps</li>
        </ul>

        <p>
          Through a dynamic and flexible process including Research, Prototypes,
          Usability Tests and more, I create solutions to improve people's
          lives, delivering a product people love and use.
        </p> */}
        </div>

        <h4 className="padder-vertical" style={{ color: "#fff" }}>
          Latest work
        </h4>

        {Object.keys(data.works).map((item) => {
          let work = data.works[item];
          let workImage = work.image;
          let workImageBack = work.imageBack;

          return (
            <div key={work.id} className="work-item">
              <Link to={"/work/" + work.id}>
                <img
                  className="work-image"
                  src={workImage}
                  // onMouseOver={e => (e.currentTarget.src = workImageBack)}
                  // onMouseOut={e => (e.currentTarget.src = workImage)}
                  alt={"work " + work.title}
                />
              </Link>
              <div className="padder-vertical" style={{ marginTop: 10 }}>
                <span className="work-title">{work.title}</span>
                <p className="work-role">{work.role}</p>
              </div>
            </div>
          );
        })}

        <div className="padder-vertical">
          <p className="margin-bottom-sm">
            Want to have a chat? Drop me a line:
          </p>
          <a className="link-underline" href="mailto:hello@matheusbaumgart.com">
            hello@matheusbaumgart.com
          </a>
        </div>
      </div>
    );
  }
}
