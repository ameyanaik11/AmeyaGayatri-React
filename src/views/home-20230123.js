import React from 'react'

import { Helmet } from 'react-helmet'

import EventNameAndTimeSimple from '../components/event-name-and-time-simple'
import './home-20230123.css'

const Home20230123 = (props) => {
  return (
    <div className="home20230123-container">
      <Helmet>
        <title>Ameya & Gayatri's Wedding Celebration</title>
        <meta
          name="description"
          content="Join the joy and create lasting memories with us, taking place from Feb 23 to Feb 24 in Pune."
        />
        <meta
          property="og:title"
          content="Ameya &amp; Gayatri's Wedding Celebration"
        />
        <meta
          property="og:description"
          content="Join the joy and create lasting memories with us, taking place from Feb 23 to Feb 24 in Pune."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/425c9fdf-65a5-4028-a28e-1e3e70635a39/9ada2f25-bda5-4ba1-bd47-c975c3b50f52?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="home20230123-hero">
        <div className="home20230123-container01">
          <div className="home20230123-container02">
            <h1 className="home20230123-hero-heading">AMEYA &amp; GAYATRI</h1>
            <span className="home20230123-hero-sub-heading">
              Feb 24, 2024, 12:48 pm | Baner, Pune
            </span>
          </div>
        </div>
      </div>
      <div className="home20230123-event">
        <div className="home20230123-container03">
          <img
            alt="image"
            src="/external/order-of-events-transparent-200h.png"
            className="home20230123-image"
          />
        </div>
        <div className="home20230123-container04">
          <span className="home20230123-text">Feb 23 | Friday</span>
          <EventNameAndTimeSimple
            time="4:00 pm"
            event="Tea &amp; Refreshments"
            rootClassName="event-name-and-time-simple-root-class-name"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="6:00 pm"
            event="Engagement"
            rootClassName="event-name-and-time-simple-root-class-name8"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="7:15 pm"
            event="Var vadhu pujan"
            rootClassName="event-name-and-time-simple-root-class-name19"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="7:30 pm"
            event="Simant pujan"
            rootClassName="event-name-and-time-simple-root-class-name20"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="8:00 pm"
            event="Sangeet"
            rootClassName="event-name-and-time-simple-root-class-name21"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="9:00 pm"
            event="Dinner"
            rootClassName="event-name-and-time-simple-root-class-name22"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="10:00 pm"
            event="Wrap up"
            rootClassName="event-name-and-time-simple-root-class-name23"
          ></EventNameAndTimeSimple>
        </div>
        <div className="home20230123-container05">
          <span className="home20230123-text01">Feb 24 | Saturday</span>
          <EventNameAndTimeSimple
            time="6:00 am"
            event="Haldi"
            rootClassName="event-name-and-time-simple-root-class-name24"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="6:30 AM"
            event="Ushti Halad"
            rootClassName="event-name-and-time-simple-root-class-name25"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="8:00 am"
            event="Breakfast"
            rootClassName="event-name-and-time-simple-root-class-name26"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="8:45 am"
            event="Mangalashtake"
            rootClassName="event-name-and-time-simple-root-class-name27"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="9:15 am"
            event="Kanyadan"
            rootClassName="event-name-and-time-simple-root-class-name28"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="9:45 am"
            event="Saptpadi"
            rootClassName="event-name-and-time-simple-root-class-name29"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="12:15 pm"
            event="Bride in Doli"
            rootClassName="event-name-and-time-simple-root-class-name30"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="12:48 pm"
            event="Wedding"
            rootClassName="event-name-and-time-simple-root-class-name31"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="1:00 pm"
            event="Reception &amp; Lunch"
            rootClassName="event-name-and-time-simple-root-class-name32"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            time="4:00 pm"
            event="Bidai - heading home"
            rootClassName="event-name-and-time-simple-root-class-name33"
          ></EventNameAndTimeSimple>
        </div>
      </div>
      <div className="home20230123-venue">
        <div className="home20230123-banner bannerContainer">
          <span className="home20230123-text02">
            <span>Venue</span>
            <br></br>
          </span>
          <span className="home20230123-text05">
            Buntara Bhavana Banquet Hall
          </span>
          <span className="home20230123-text06">
            Buntara Bhavana Banquet Hall,
          </span>
          <span className="home20230123-text07">
            <span>Near Mercedes Showroom,</span>
            <br></br>
            <span> Mumbai-Bangalore Highway,</span>
            <br></br>
            <span>Baner, Pune 411045</span>
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.218822142188!2d73.7666708!3d18.5641709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb4661cc46b%3A0x5ae30f3f48937359!2sBuntara%20Bhavana%20Banquet%20Hall%20and%20Auditorium%20in%20Pune!5e0!3m2!1sen!2sus!4v1705444024387!5m2!1sen!2sus"
            className="home20230123-iframe"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/sBi1RLNhiX4adZyYA"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home20230123-btn-group">
              <button className="home20230123-hero-button1 buttonFilled">
                Google Maps
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="home20230123-save-the-date">
        <div className="home20230123-banner1 bannerContainer">
          <span className="home20230123-text13">Save the Date</span>
          <span className="home20230123-text14">
            <span>
              Join us as we celebrate the union of Ameya and Gayatri on their
              special day.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              We invite you to witness their love and share in their joy.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home20230123-text18">
            <span>
              We are delighted to invite you to the joyous celebration of Ameya
              and Gayatri&apos;s wedding!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Please take a moment to RSVP and share your attendance preferences
              for the various events. 
            </span>
            <br></br>
            <span>Thank you for being a part of our joyous celebration!</span>
            <br></br>
          </span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScdMbV9qrn4U4UgIDbenF6QMgzszX98VgJILi3A_D-tZddE6Q/viewform"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home20230123-btn-group1">
              <button className="home20230123-hero-button11 buttonFilled">
                Confirm Attendance
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="home20230123-footer">
        <footer className="footerContainer home20230123-footer1">
          <div className="home20230123-separator"></div>
          <div className="home20230123-container06">
            <span className="home20230123-text26">
              © 2024. By Ameya &amp; Gayatri
            </span>
            <span className="home20230123-text27 bodySmall">
              © 2024. By Ameya &amp; Gayatri
            </span>
            <div className="home20230123-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home20230123-icon socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home20230123-icon2 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home20230123-icon4 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
      <div className="home20230123-save-the-date-2">
        <div className="home20230123-container07">
          <div className="home20230123-container08">
            <span className="home20230123-text28">Save the Date</span>
            <span className="home20230123-text29">
              <span>
                <span>
                  Join us as we celebrate the union of Ameya and Gayatri on
                  their special day.
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
              <br></br>
              <span>
                <span>
                  We invite you to witness their love and share in their joy.
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
            </span>
            <span className="home20230123-text37">
              <span>
                <span>
                  We are delighted to invite you to the joyous celebration of
                  Ameya and Gayatri&apos;s wedding!
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
              <br></br>
              <br></br>
              <span>
                Please take a moment to RSVP and share your attendance
                preferences for the various events. 
              </span>
              <br></br>
              <span>Thank you for being a part of our joyous celebration!</span>
              <br></br>
            </span>
            <div className="home20230123-btn-group2">
              <button className="home20230123-hero-button12 buttonFilled">
                Confirm Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home20230123-save-the-date-21">
        <div className="home20230123-container09">
          <div className="home20230123-container10">
            <span className="home20230123-text47">Save the Date</span>
            <span className="home20230123-text48">
              <span>
                <span>
                  Join us as we celebrate the union of Ameya and Gayatri on
                  their special day.
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
              <br></br>
              <span>
                <span>
                  We invite you to witness their love and share in their joy.
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
            </span>
            <span className="home20230123-text56">
              <span>
                <span>
                  We are delighted to invite you to the joyous celebration of
                  Ameya and Gayatri&apos;s wedding!
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
              <br></br>
              <br></br>
              <span>
                Please take a moment to RSVP and share your attendance
                preferences for the various events. 
              </span>
              <br></br>
              <span>Thank you for being a part of our joyous celebration!</span>
              <br></br>
            </span>
            <div className="home20230123-btn-group3">
              <button className="home20230123-hero-button13 buttonFilled">
                Confirm Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home20230123
