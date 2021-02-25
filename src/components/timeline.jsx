import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Working student UI/ UX Design{" "}
                          <span> 01.2021-present</span>
                        </h2>
                        <p>
                          Working as student at Gastromatic company. I work
                          mostly with the company's components, debug and
                          restyle them as asked. I programm with the company's
                          UI-repository with Visual Studio Code, styling with
                          CSS, SCSS and styled-components with ReactJS.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship Master study <span> 08/2020-02/2021</span>
                        </h2>
                        <p>
                          Internship at ikum(Institut für Kommunikation und
                          Medien) at the University of Applied Sciences
                          Darmstadt in the project "Euphorie und Aufbruch"
                          <br></br> - Development of a "timeline visualization"
                          for three dance archives of the Folkwang University of
                          the Arts in cooperation with the German Dance Archive
                          Cologne and the Pina Bausch Foundation.<br></br> -
                          Indexing of the material, about 100 sources, with a
                          view to the temporal aspects and the temporal
                          indications drawn from them or connections between
                          points in time and time intervals.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Master study <span> 10/2019-present</span>
                        </h2>
                        <p>
                          Information Science (M.Sc.) Hochschule Darmstadt,
                          University of Applied Sciences
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship Bachelor study
                          <span> 11/2018 –05/2019 </span>
                        </h2>
                        <p>
                          Internship at Ice Cream Cloud Software UG in Darmstadt
                          in online marketing & sales<br></br>-. Synchronization
                          of hotel data in different online travel agency with a
                          channel manager
                          <br></br> - Find and contact new customers for the
                          Online-Travel-Agency find and contact
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelor study<span> 10/2015 –10/2019 </span>
                        </h2>
                        <p>
                          Informationswissenschaft (B.Sc.) Darmstadt University
                          of Applied Sciences, (final grade: 2,0)
                          Bachelor-Thesis: "Interactive visualizations for
                          analytical comparisons" (grade: 1,6)
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          International study and language college
                          (Studienkolleg) <span>10/2013-07/2014</span>
                        </h2>
                        <p>Johannes Gutenberg-Universität Mainz</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
