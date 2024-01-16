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
        <span className="event-name-and-time-text">{props.Time}</span>
        <span className="event-name-and-time-text1">{props.TimeUnit}</span>
      </div>
      <div className="event-name-and-time-container2">
        <span className="event-name-and-time-text2">{props.Event}</span>
      </div>
    </div>
  )
}

EventNameAndTime.defaultProps = {
  Event: 'Wedding',
  Time: '6',
  rootClassName: '',
  TimeUnit: 'pm',
}

EventNameAndTime.propTypes = {
  Event: PropTypes.string,
  Time: PropTypes.string,
  rootClassName: PropTypes.string,
  TimeUnit: PropTypes.string,
}

export default EventNameAndTime
