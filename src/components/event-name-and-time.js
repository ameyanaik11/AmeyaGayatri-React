import React from 'react'

import PropTypes from 'prop-types'

import './event-name-and-time.css'

const EventNameAndTime = (props) => {
  return (
    <div
      className={`event-name-and-time-feature-card featuresCard ${props.rootClassName} `}
    >
      <div className="event-name-and-time-container"></div>
      <div className="event-name-and-time-container1">
        <span className="event-name-and-time-text">{props.time}</span>
        <span className="event-name-and-time-text1">{props.timeUnit}</span>
      </div>
      <div className="event-name-and-time-container2">
        <span className="event-name-and-time-text2">{props.event}</span>
      </div>
    </div>
  )
}

EventNameAndTime.defaultProps = {
  event: 'Wedding',
  time: '6',
  rootClassName: '',
  timeUnit: 'pm',
}

EventNameAndTime.propTypes = {
  event: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
  timeUnit: PropTypes.string,
}

export default EventNameAndTime
