import React, { Component } from 'react';
import data from '../utils/data'

export default class Work extends Component {

    render() {
        let pageId = this.props.match.params.id;
        let work = data.works[pageId];

        return (
            <div className="work-page">
                <img src={work.image} alt={'work ' + work.title} width="100%" />

                <div className="main-col">
                    <h2 className="margin-bottom-sm">{work.title}</h2>
                    <span className="work-subtitle">{work.role}</span>

                    <p>{work.description}</p>

                    <br />
                    <h4 className="text-bolder">My Role</h4>
                    <p>{work.roleDescription}</p>

                    <br />

                    {work.challenges.map(challenge =>
                        <div>
                            <h4>{challenge.title}</h4>
                            <img width="100%" src={challenge.image} />
                            <p>{challenge.description}</p>
                            <br />
                        </div>
                    )}

                    {/* <h4>Designs</h4>

                    <ul className="work-images">
                        <li>
                            <img src="http://via.placeholder.com/280x200" />
                        </li>
                        <li>
                            <img src="http://via.placeholder.com/280x200" />
                        </li>
                        <li>
                            <img src="http://via.placeholder.com/280x200" />
                        </li>
                    </ul> */}
                </div>
            </div>
        );
    }
}