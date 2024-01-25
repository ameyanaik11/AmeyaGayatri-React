import React from 'react'

import PropTypes from 'prop-types'

import './event-name-and-time-simple.css'

const EventNameAndTimeSimple = (props) => {
  return (
    <div
      className={`event-name-and-time-simple-feature-card featuresCard ${props.rootClassName} `}
    >
      <div className="event-name-and-time-simple-container">
        <animate-on-reveal
          animation="none"
          duration="300ms"
          delay="0s"
          direction="normal"
          easing="ease"
          iteration="1"
          className=""
        >
          <span
            data-thq-animate-on-reveal="true"
            className="event-name-and-time-simple-text"
          >
            {props.time}
          </span>
        </animate-on-reveal>
        <span className="event-name-and-time-simple-text1">{props.event}</span>
      </div>
    </div>
  )
}

EventNameAndTimeSimple.defaultProps = {
  event: 'Wedding FOO BAR',
  rootClassName: '',
  time: '6:00 AM',
}

EventNameAndTimeSimple.propTypes = {
  event: PropTypes.string,
  rootClassName: PropTypes.string,
  time: PropTypes.string,
}

export default EventNameAndTimeSimple
