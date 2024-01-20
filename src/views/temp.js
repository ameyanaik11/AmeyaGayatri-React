import React from 'react'

import { Helmet } from 'react-helmet'

import EventNameAndTime from '../components/event-name-and-time'
import './temp.css'

const Temp = (props) => {
  return (
    <div className="temp-container">
      <Helmet>
        <title>Temp - AmeyaGayatri</title>
        <meta property="og:title" content="Temp - AmeyaGayatri" />
        <meta
          property="og:description"
          content="Join the joy and create lasting memories with us, taking place from Feb 23 to Feb 24 in Pune."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/425c9fdf-65a5-4028-a28e-1e3e70635a39/9ada2f25-bda5-4ba1-bd47-c975c3b50f52?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="temp-features">
        <div className="temp-features-container featuresContainer">
          <div className="temp-features1">
            <div className="temp-container01">
              <div className="temp-container02">
                <span className="temp-text">
                  <br></br>
                  <span>WHEN</span>
                </span>
              </div>
              <div className="temp-container03">
                <span className="temp-text03">
                  <span>FRIDAY | </span>
                  <span>Feb 23rd, 2024</span>
                  <br></br>
                </span>
                <EventNameAndTime
                  Time="4"
                  Event="foo"
                  rootClassName="event-name-and-time-root-class-name3"
                ></EventNameAndTime>
                <EventNameAndTime
                  Time="5"
                  Event="engagement"
                  rootClassName="event-name-and-time-root-class-name4"
                ></EventNameAndTime>
                <EventNameAndTime
                  Time="6"
                  Event="bar"
                  rootClassName="event-name-and-time-root-class-name5"
                ></EventNameAndTime>
              </div>
            </div>
          </div>
          <div className="temp-features2"></div>
          <div className="temp-features3">
            <div className="temp-container04">
              <div className="temp-container05">
                <span className="temp-text07">
                  <br></br>
                  <span>WHERE</span>
                </span>
              </div>
              <div className="temp-container06">
                <span className="temp-text10">
                  Buntara Bhavana Banquet Hall
                </span>
                <span className="temp-text11">
                  <span>Near Mercedes Showroom Mumbai-Bangalore Highway,</span>
                  <br></br>
                  <span>
                    Baner, Pune 411045
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <a
                  href="https://maps.app.goo.gl/sBi1RLNhiX4adZyYA"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="temp-link buttonFilledSecondary button"
                >
                  <span>
                    <span>Google Maps</span>
                    <br></br>
                  </span>
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.218822142188!2d73.7666708!3d18.5641709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb4661cc46b%3A0x5ae30f3f48937359!2sBuntara%20Bhavana%20Banquet%20Hall%20and%20Auditorium%20in%20Pune!5e0!3m2!1sen!2sus!4v1705444024387!5m2!1sen!2sus"
                  className="temp-iframe"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="temp-features4">
            <div className="temp-container07">
              <h2 className="temp-features-heading heading2">THE WEDDING</h2>
              <span className="temp-features-sub-heading bodyLarge">
                <span>
                  Join us for a joyous occasion filled with love and happiness
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="temp-container08">
              <div className="freePricingCard temp-pricing-card">
                <div className="temp-container09">
                  <span className="temp-text27 heading3">WHEN</span>
                  <span className="bodySmall">Feb 24, 2024 12:00 PM</span>
                </div>
              </div>
              <div className="basicPricingCard temp-pricing-card1">
                <div className="temp-container10">
                  <span className="temp-text28 heading3">WHERE</span>
                  <span>
                    <span>Buntara Bhavana Banquet Hall,</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span>
                      Near Mercedes Showroom Mumbai-Bangalore Highway,
                    </span>
                    <br></br>
                    <span>Baner, Pune 411045</span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.218822142188!2d73.7666708!3d18.5641709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb4661cc46b%3A0x5ae30f3f48937359!2sBuntara%20Bhavana%20Banquet%20Hall%20and%20Auditorium%20in%20Pune!5e0!3m2!1sen!2sus!4v1705444024387!5m2!1sen!2sus"
                  className="temp-iframe1"
                ></iframe>
                <a
                  href="https://maps.app.goo.gl/sBi1RLNhiX4adZyYA"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="temp-link1 buttonFilledSecondary"
                >
                  <span>
                    <span>Google Maps</span>
                    <br></br>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="temp-save-the-date">
        <div className="bannerContainer temp-banner">
          <h1 className="temp-banner-heading heading2">Save the Date</h1>
          <span className="temp-banner-sub-heading bodySmall">
            <span>
              Join us as we celebrate the union of Ameya and Gayatri on their
              special day. We invite you to witness their love and share in
              their joy.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScdMbV9qrn4U4UgIDbenF6QMgzszX98VgJILi3A_D-tZddE6Q/viewform?embedded=true"
            className="temp-iframe2"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Temp
