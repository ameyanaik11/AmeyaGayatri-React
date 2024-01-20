import React from 'react'

import { Helmet } from 'react-helmet'

import EventNameAndTimeSimple from '../components/event-name-and-time-simple'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
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
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-container2">
            <h1 className="home-hero-heading">AMEYA &amp; GAYATRI</h1>
            <span className="home-hero-sub-heading">
              Feb 24, 2024, 12:48 pm | Baner, Pune
            </span>
          </div>
        </div>
      </div>
      <div className="home-event">
        <div className="home-container3">
          <img
            alt="image"
            src="/external/order-of-events-transparent-200h.png"
            className="home-image"
          />
        </div>
        <div className="home-container4">
          <span className="home-text">Feb 23 | Friday</span>
          <EventNameAndTimeSimple
            Time="4:00 pm"
            Event="Tea &amp; Refreshments"
            rootClassName="event-name-and-time-simple-root-class-name4"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="6:00 pm"
            Event="Engagement"
            rootClassName="event-name-and-time-simple-root-class-name1"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="7:15 pm"
            Event="Var vadhu pujan"
            rootClassName="event-name-and-time-simple-root-class-name2"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="7:30 pm"
            Event="Simant pujan"
            rootClassName="event-name-and-time-simple-root-class-name3"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="8:00 pm"
            Event="Sangeet"
            rootClassName="event-name-and-time-simple-root-class-name5"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="9:00 pm"
            Event="Dinner"
            rootClassName="event-name-and-time-simple-root-class-name6"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="10:00 pm"
            Event="Wrap up"
            rootClassName="event-name-and-time-simple-root-class-name7"
          ></EventNameAndTimeSimple>
        </div>
        <div className="home-container5">
          <span className="home-text01">Feb 24 | Saturday</span>
          <EventNameAndTimeSimple
            Time="6:00 am"
            Event="Haldi"
            rootClassName="event-name-and-time-simple-root-class-name9"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="6:30 AM"
            Event="Ushti Halad"
            rootClassName="event-name-and-time-simple-root-class-name11"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="8:00 am"
            Event="Breakfast"
            rootClassName="event-name-and-time-simple-root-class-name12"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="8:45 am"
            Event="Mangalashtake"
            rootClassName="event-name-and-time-simple-root-class-name13"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="9:15 am"
            Event="Kanyadan"
            rootClassName="event-name-and-time-simple-root-class-name14"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="9:45 am"
            Event="Saptpadi"
            rootClassName="event-name-and-time-simple-root-class-name15"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="12:15 pm"
            Event="Bride in Doli"
            rootClassName="event-name-and-time-simple-root-class-name10"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="12:48 pm"
            Event="Wedding"
            rootClassName="event-name-and-time-simple-root-class-name16"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="1:00 pm"
            Event="Reception &amp; Lunch"
            rootClassName="event-name-and-time-simple-root-class-name17"
          ></EventNameAndTimeSimple>
          <EventNameAndTimeSimple
            Time="4:00 pm"
            Event="Bidai - heading home"
            rootClassName="event-name-and-time-simple-root-class-name18"
          ></EventNameAndTimeSimple>
        </div>
      </div>
      <div className="home-venue">
        <div className="home-banner bannerContainer">
          <span className="home-text02">
            <span>Venue</span>
            <br></br>
          </span>
          <span className="home-text05">Buntara Bhavana Banquet Hall</span>
          <span className="home-text06">Buntara Bhavana Banquet Hall,</span>
          <span className="home-text07">
            <span>Near Mercedes Showroom,</span>
            <br></br>
            <span> Mumbai-Bangalore Highway,</span>
            <br></br>
            <span>Baner, Pune 411045</span>
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.218822142188!2d73.7666708!3d18.5641709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2beb4661cc46b%3A0x5ae30f3f48937359!2sBuntara%20Bhavana%20Banquet%20Hall%20and%20Auditorium%20in%20Pune!5e0!3m2!1sen!2sus!4v1705444024387!5m2!1sen!2sus"
            className="home-iframe"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/sBi1RLNhiX4adZyYA"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="home-btn-group">
              <button className="home-hero-button1 buttonFilled">
                Google Maps
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="home-save-the-date">
        <div className="home-banner1 bannerContainer">
          <span className="home-text13">Save the Date</span>
          <span className="home-text14">
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
          <span className="home-text18">
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
            <div className="home-btn-group1">
              <button className="home-hero-button11 buttonFilled">
                Confirm Attendance
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-separator"></div>
          <div className="home-container6">
            <span className="home-text26">© 2024. By Ameya &amp; Gayatri</span>
            <span className="home-text27 bodySmall">
              © 2024. By Ameya &amp; Gayatri
            </span>
            <div className="home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon2 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon4 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
